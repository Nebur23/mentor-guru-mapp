import { View, Text } from "react-native";
import React from "react";
import PdfViewer from "@/components/ui/pdf-viewer";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Pdf = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView className='flex-1'>
      <PdfViewer id={id as string} />
    </SafeAreaView>
  );
};

export default Pdf;
