import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImageViewer from '@/components/ui/ImageViewer';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
const PlaceholderImage = require('@/assets/images/start.png');
const SigninPrompt = () => {
  return (
    <SafeAreaView className='bg-background h-full'>
      <View className='flex flex-col mt-10 gap-4 items-center justify-center'>
        <ImageViewer imgSource={PlaceholderImage} />
        <View className='flex gap-2 flex-row'>
          <Text className='text-black font-semibold text-3xl mt-4'>
            Let's Get Started!
          </Text>
          <Link href='/(auth)/sign-in' className='mt-5'>
            <MaterialIcons name='arrow-forward' size={24} color='#FF9C01' />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SigninPrompt