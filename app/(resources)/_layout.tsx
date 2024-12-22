import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ResourcesLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='advanced' />
    </Stack>
  );
};

export default ResourcesLayout;
