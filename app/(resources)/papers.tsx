import { View, Text, ScrollView } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const PastPer = () => {
  return (
    <SafeAreaView className='justify-center items-center h-full'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stack.Screen
          options={{
            title: "Past papers",
            headerStyle: { backgroundColor: "#E6C229" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        <Card title='A level' level='advanced' />
        <Card title='O level' level='ordinary' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PastPer;
