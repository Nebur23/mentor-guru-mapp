import SkeletonLoader from "@/components/ui/skeleton";
import WelcomeHeader from "@/components/welcome-header";

import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  return (
    <View className='flex-1'>
      {/* Welcome Header */}
      <WelcomeHeader />

      {/* Content Section */}
      <ScrollView showsVerticalScrollIndicator={false} className='flex-1'>
        <Text className='text-gray-800 text-base'>Your Videos and Content</Text>

        {loading ? <SkeletonLoader /> : <Text>Content</Text>}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
