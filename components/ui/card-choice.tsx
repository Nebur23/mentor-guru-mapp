import { View, Text, Image } from "react-native";
import React from "react";
import CustomButtom from "./custom-btn";
import { router } from "expo-router";

const CardChoice = ({ title, url }: { title: string; url: string }) => {
  const submit = () => {
    if (url === "papers") {
      router.push("/papers");
      return;
    } else {
      router.push("/solutions");
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
      <CustomButtom title='Get Started ' handlePress={submit} />
    </View>
  );
};

export default CardChoice;
