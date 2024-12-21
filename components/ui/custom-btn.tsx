import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

const CustomButtom = ({
  title,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}: {
  title: string;
  handlePress?: () => void;
  containerStyle?: string;
  textStyle?: string;
  isLoading?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary w-full rounded-xl min-h-[52px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size='small' color='#FFF' />
      ) : (
        <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButtom;
