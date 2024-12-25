import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1A8FE3",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <TabIcon icon={icons.home} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='Resources'
        options={{
          title: "Resources",
          tabBarIcon: ({ color }) => (
            <TabIcon icon={icons.file} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabIcon icon={icons.profile} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const TabIcon = ({ icon, color }: { icon: any; color: string }) => {
  return (
    <View>
      <Image
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
        source={icon}
      />
    </View>
  );
};
