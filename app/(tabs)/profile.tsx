import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, Alert,Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useGlobalContext } from "@/context/GlobalProvider";
import { router } from "expo-router";
import { logout } from "@/lib/appwrite";

const ProfileScreen = () => {
  const { user } = useGlobalContext();

  type IconType = 
  | "edit"
  | "notifications"
  | "subscriptions"
  | "support"
  | "feedback"
  | "payment"
  | "check-circle"
  | "style"
  | "accessible"
  | "key"
  | "sort"
  | "map"
  | "filter"
  | "search"
  | "repeat"
  | "zoom-out-map";
  interface IconItem {
    icon: IconType;
    label: string;
    action?: () => void; 
  }
  const Logout=()=>{
    logout()
  
    Alert.alert("logout successful")
    router.replace("/(auth)/sign-in")
   
  }
  const openEmail = () => {
    Linking.openURL("mailto:jpteks728@gmail.com?subject=Support Request");
  };
  
  const iconsList: IconItem[] = [
    { icon: "edit", label: "Edit Profile" },
    { icon: "notifications", label: "Notifications" },
    { icon: "subscriptions", label: "Subscriptions" },
    { icon: "support", label: "Contact Support", action:openEmail  },
    { icon: "feedback", label: "Feedback" },
    { icon: "payment", label: "Payment History" },
    { icon: "check-circle", label: "Completed Courses" }
  ];

  return (
    <View className="flex-1 bg-white">
      
      <View className="flex-row items-center justify-between p-4 bg-secondary">
       
        <View className="flex-row items-center space-x-3">
          <Image
            source={{ uri: user?.avatar}}
            className="w-12 h-12 rounded-full bg-white"
          />
          <Text className="text-xl font-semibold">{user?.name }</Text>
        </View>
        
        
        <TouchableOpacity onPress={Logout}>
          <MaterialIcons name="logout" size={24} color="white" />
        </TouchableOpacity>
      </View>

      
      <ScrollView className="flex-1 p-4 bg-white">
        <FlatList
          data={iconsList}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => (
            <TouchableOpacity 
              onPress={item.action} 
              className="flex-row items-center gap-4 mb-4 border border-secondary-200 p-6 rounded-[7px]"
            >
              <MaterialIcons name={item.icon} size={24} color="black" />
              <Text className="text-lg">{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
