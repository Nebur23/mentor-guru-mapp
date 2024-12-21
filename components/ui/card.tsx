import { View, Text, Image } from "react-native";
import React from "react";
import CustomButtom from "./custom-btn";
import { router } from "expo-router";

const Card = ({ title, level }: { title: string; level: string }) => {
  const submit = () => {
    if (level === "advanced") {
      router.push("/advanced");
      return;
    } else {
      router.push("/ordinary");
    }
  };
  return (
    <View className='mb-3'>
      <Text className='text-center'> {title} </Text>
      <Image
        source={{
          uri: "https://utfs.io/f/sDJN6CSX6MvY0HIWELvZowzOpsYWD1jXQ3evFdluRHbPTtNa",
        }}
        className='w-72 h-64 rounded-md'
        resizeMode='contain'
      />
      <CustomButtom title='Get Started' handlePress={submit} />
    </View>
  );
};

export default Card;
