import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useGlobalContext } from "@/context/GlobalProvider";

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
  }
  const iconsList: IconItem[] = [
    { icon: "edit", label: "Edit Profile" },
    { icon: "notifications", label: "Notifications" },
    { icon: "subscriptions", label: "Subscriptions" },
    { icon: "support", label: "Contact Support" },
    { icon: "feedback", label: "Feedback" },
    { icon: "payment", label: "Payment History" },
    { icon: "check-circle", label: "Completed Courses" }
  ];

  return (
    <View className="flex-1 bg-white">
      
      <View className="flex-row items-center justify-between p-4 bg-gray-100">
       
        <View className="flex-row items-center space-x-3">
          <Image
            source={{ uri: user?.avatar || "https://example.com/default-avatar.jpg" }} // Replace with actual user avatar URL
            className="w-12 h-12 rounded-full"
          />
          <Text className="text-xl font-semibold">{user?.name || "User Name"}</Text>
        </View>
        
        
        <TouchableOpacity onPress={() => console.log("Logout clicked")}>
          <MaterialIcons name="logout" size={24} color="black" />
        </TouchableOpacity>
      </View>

      
      <ScrollView className="flex-1 p-4 bg-white">
      
      <FlatList
        data={iconsList}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => {
          
          const validIcon: IconType = iconsList.some(icon => icon.icon === item.icon) ? item.icon : "edit";

          return (
            <View className="flex-row items-center gap-4 mb-4">
              <MaterialIcons name={validIcon} size={24} color="black" />
              <Text className="text-lg">{item.label}</Text>
            </View>
          );
        }}
      />
    
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
