import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { advancedSubjects, ordinarySubjects } from "@/constants/paper";

const Paper = () => {
  const subjects = ordinarySubjects;
  return (
    <SafeAreaView>
      <ScrollView>
        <View className='p-3 gap-3'>
          {subjects.map((subject, id) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => router.push(`/past-paper/${subject}-ordinary`)}
                key={id}
                className='p-5 bg-white rounded-lg shadow'
              >
                <Text>{subject}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Paper;
