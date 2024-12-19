import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-red-500'>App</Text>
      <Link href='/(auth)/sign-up'>
        <Text className='text-blue-500'>sign-in</Text>
      </Link>
    </View>
  );
};

export default App;
