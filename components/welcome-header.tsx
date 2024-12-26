import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SearchInput from "./ui/search-input";

const { height } = Dimensions.get("window"); // Get the screen height
const WelcomeHeader = ({
  user,
}: {
  user: {
    username: string;
    email: string;
    avatar: string;
  };
}) => {
  const [notifications, setNotifications] = useState(2);
  return (
    <View
      className='bg-[#E6C229] rounded-b-[40px] px-4 pt-7'
      style={{ height: height * 0.22 }} // 30% of screen height
    >
      <View className='flex flex-row justify-between items-center'>
        <View className='flex mt-3 '>
          <Text className='text-white text-3xl font-pmedium'>
            Hi {user.username},
          </Text>
          <Text className='font-pregular text-gray-500'>
            Let's start Learning
          </Text>
        </View>

        <Pressable>
          <View className='bg-white p-2 rounded-lg border relative border-gray-300'>
            <Ionicons name='notifications-outline' size={25} color='gray' />
            {notifications > 0 && (
              <View className='absolute top-[5px] right-[3px] bg-red-500 rounded-full w-4 h-4 justify-center items-center'>
                <Text className='text-white text-xs'>{notifications}</Text>
              </View>
            )}
          </View>
        </Pressable>
      </View>
      <SearchInput initialQuery='' />
    </View>
  );
};

export default WelcomeHeader;
