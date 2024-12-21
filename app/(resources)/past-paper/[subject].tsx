import React, { useEffect, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ActivityIndicator, FlatList, Image } from "react-native";
import serverApi from "@/api/server";
import extractIdFromUrl, { splitSubjectCategory } from "@/utils/extractId";
import { images } from "@/constants";

interface Paper {
  _id: string;
  name: string;
  category: string;
  url: string;
  paper: string;
  year: string;
  [key: string]: any;
}

const Paper = () => {
  const [data, setData] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { subject: sub } = useLocalSearchParams();
  const { subject, category } = splitSubjectCategory(sub as string);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await serverApi.get(
          `/api/paper?category=${category}&name=${subject}`
        );

        setData(response.data.papers);
      } catch (err: any) {
        if (err.response?.status === 404) {
          setError("coming soon!.");
        } else {
          setError("An error occurred while fetching papers.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, subject]);

  if (loading) {
    return (
      <View className='flex-1 justify-center items-center bg-gray-100'>
        <ActivityIndicator size='large' color='#FF9C01' />
      </View>
    );
  }

  if (error) {
    return (
      <View className='flex-1 justify-center items-center bg-gray-100'>
        <Image
          resizeMode='contain'
          source={images.nopaper}
          className='w-50% h-24'
        />
        <Text className='text-black text-lg'>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 p-4'>
        <Text className='text-center text-lg font-bold mb-4'>{subject}</Text>

        <FlatList
          data={data}
          keyExtractor={item => item._id.toString()}
          renderItem={({ item }) => {
            const id = extractIdFromUrl(item.url);
            return (
              <View className='mb-4 p-4 bg-white rounded-lg shadow'>
                <Link href={`/pdf/${id}`}>
                  <View>
                    <Text className='text-lg font-bold text-gray-800'>
                      {item.name}
                    </Text>
                    <Text className='text-sm text-gray-600 mt-2'>
                      {item.category}
                    </Text>
                    <Text className='text-sm text-gray-600'>{item.year}</Text>
                    <Text className='text-sm text-gray-600'>
                      paper - {item.paper}
                    </Text>
                  </View>
                </Link>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Paper;
