import SkeletonLoader from "@/components/ui/skeleton";
import VideoCard from "@/components/VideoCard";
import WelcomeHeader from "@/components/welcome-header";
import useAppwrite from "@/hooks/useAppwrite";
import { getAllPosts } from "@/lib/appwrite";

import React, { useState } from "react";
import { View, Text, ScrollView, FlatList, RefreshControl } from "react-native";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

  const { data: posts, refetch } = useAppwrite(getAllPosts);
  // const { data: latestPosts } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  return (
    <View className='flex-1'>
      {/* Welcome Header */}
      <WelcomeHeader />

      {/* Content Section */}
      <View className='flex-1'>
        <Text className='text-gray-800 text-base'>Your Videos and Content</Text>

        <FlatList
          data={posts}
          keyExtractor={item => item.$id}
          renderItem={({ item }) => (
            <VideoCard
              title={item.title as string}
              thumbnail={item.thumbnail as string}
              video={item.video as string}
              //creator={item.creator?.username}
              //avatar={item.creator?.avatar as string}
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
      </View>
    </View>
  );
};

export default HomeScreen;
