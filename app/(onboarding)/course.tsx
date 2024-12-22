import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImageViewer from '@/components/ui/ImageViewer';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
const PlaceholderImage = require('@/assets/images/course.png');
const Course = () => {
  return (
    <SafeAreaView className='bg-background h-full'>
      <View className='flex flex-col mt-10 gap-4 items-center justify-center'>
        <ImageViewer imgSource={PlaceholderImage} />
        <Text className='text-black font-semibold text-3xl mt-4'>
          Learn Anytime
        </Text>
        <Text className='text-black font-normal text-md text-justify'>
          {" "}
          Access courses on the go with our easy-to-use platform.
        </Text>
        <Link href='/progress' className=' flex text-center'>
          <MaterialIcons name='arrow-forward' size={28} color='#FF9C01' />
        </Link>
      </View>
    </SafeAreaView>
  );
}
export default Course;
