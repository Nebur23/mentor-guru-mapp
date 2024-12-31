import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButtom from "@/components/ui/custom-btn";
import Card from "@/components/ui/card";
import CardChoice from "@/components/ui/card-choice";

const Resources = () => {
  return (
    <SafeAreaView className='justify-center items-center h-full'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardChoice title='Past papers' url='papers' />
        <CardChoice title='Solutions' url='solutions' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Resources;
