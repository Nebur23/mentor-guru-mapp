import { View, Text, ScrollView } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import { SafeAreaView } from "react-native-safe-area-context";

const PastPer = () => {
  return (
    <SafeAreaView className='justify-center items-center h-full'>
      <ScrollView>
        <Text>Past papers</Text>

        <Card title='A level' level='advanced' />
        <Card title='O level' level='ordinary' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PastPer;
