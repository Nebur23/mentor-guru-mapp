import SkeletonLoader from "@/components/ui/skeleton";
import VideoCard from "@/components/VideoCard";
import WelcomeHeader from "@/components/welcome-header";
import { useGlobalContext } from "@/context/GlobalProvider";
//import useAppwrite from "@/hooks/useAppwrite";
import { getAllPosts } from "@/lib/appwrite";

import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { View, Text, FlatList, RefreshControl } from "react-native";
import { Models } from "react-native-appwrite";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useGlobalContext();
  const [data, setData] = useState<
    | {
        [key: string]: any;
      }[]
    | Models.Document[]
  >([]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await getAllPosts();
      setData(res);
    } catch (error: any) {
      Alert.alert("post Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchPosts();
    setRefreshing(false);
  };

  return (
    <View className='flex-1'>
      {/* Welcome Header */}
      <WelcomeHeader user={user} />

      {/* Content Section */}
      <View className='flex-1 mt-3'>
        <Text className=' px-4 text-3xl font-psemibold mb-3'>
          Popular <Text className='text-blue'>Courses</Text>
        </Text>

        {loading ? (
          // Loader displayed when data is being fetched
          <SkeletonLoader />
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.$id}
            renderItem={({ item }) => (
              <VideoCard
                title={item.title as string}
                thumbnail={item.thumbnail as string}
                video={item.video as string}
                creator={item.users?.username}
                avatar={item.users?.avatar as string}
              />
            )}
            ListEmptyComponent={() => (
              <View className='flex-1 justify-center items-center'>
                <Text className='text-gray-800 text-base'>No Videos Found</Text>
              </View>
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
