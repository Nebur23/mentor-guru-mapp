import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ResourceLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name='advanced' />
      <Stack.Screen name='ordinary' />
      <Stack.Screen name='papers' />
      <Stack.Screen
        name='past-paper/[subject]'
        options={{ headerShown: true, title: "" }}
      />
      <Stack.Screen name='pdf/[id]' />
    </Stack>
  );
};

export default ResourceLayout;
