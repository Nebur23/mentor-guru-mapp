import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ImageViewer from "@/components/ui/ImageViewer";
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
const PlaceholderImage = require('@/assets/images/progress.png');
const App = () => {
  return (
    <SafeAreaView className='bg-background h-full'>
  <View className="flex flex-col mt-10 gap-4 items-center justify-center" >
      <ImageViewer imgSource={PlaceholderImage} />
        <Text className='text-primary font-semibold text-3xl mt-4'>Welcome to Mentor Guru</Text>
        <View>
          <Text className='text-text font-normal text-md' >Master new skills anytime, anywhere!</Text>
        <Link href="/course" className='mt-3 flex text-center' >
          <MaterialIcons name="arrow-forward" size={28} color="#2196F3"  />
        </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
