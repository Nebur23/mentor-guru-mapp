import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImageViewer from '@/components/ui/ImageViewer';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
const PlaceholderImage = require('@/assets/images/progress.png');
const Progress = () => {
  return (
    <SafeAreaView className='bg-background h-full'>
  <View className="flex flex-col mt-10 gap-4 items-center justify-center" >
      <ImageViewer imgSource={PlaceholderImage} />
        <Text className='text-white font-semibold text-3xl mt-4'>Stay Organized</Text>
        <Text className='text-white font-normal text-md text-justify' >Track your progress and manage assignments easily.</Text>
        <Link href="/ai" >
          <MaterialIcons name="arrow-forward" size={28} color="#2196F3" />
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default Progress