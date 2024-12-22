import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

const Solutions = () => {
  return (
    <View className='flex-1 justify-center items-center bg-neutral-300'>
      <Image
        resizeMode='contain'
        source={images.nopaper}
        className='w-50% h-24'
      />
      <Text className='text-black text-lg'>coming soon!</Text>
    </View>
  );
};

export default Solutions;
