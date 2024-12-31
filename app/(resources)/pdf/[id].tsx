import { View, Text } from "react-native";
import React from "react";
import PdfViewer from "@/components/ui/pdf-viewer";
import { Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Pdf = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView className='flex-1'>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: { backgroundColor: "#E6C229" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          //headerTitle: () => <Text>boo</Text>,
        }}
      />
      <PdfViewer id={id as string} />
    </SafeAreaView>
  );
};

export default Pdf;
