import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGlobalContext } from "@/context/GlobalProvider";
import * as SplashScreen from "expo-splash-screen";

const slides = [
  {
    id: 1,
    title: "Welcome to Mentor Guru",
    subtitle: "Master new skills anytime, anywhere!",
    image: require("@/assets/images/learn.png"),
  },
  {
    id: 2,
    title: "Learn Anytime",
    subtitle: "Access courses on the go with our easy-to-use platform.",
    image: require("@/assets/images/course.png"),
  },
  {
    id: 3,
    title: "Stay Organized",
    subtitle: "Track your progress and manage assignments easily.",
    image: require("@/assets/images/progress.png"),
  },
  {
    id: 4,
    title: "AI-Powered Learning",
    subtitle:
      "Experience personalized learning powered by AI recommendations and an interactive chatbot.",
    image: require("@/assets/images/ai.png"),
  },
  {
    id: 5,
    title: "Let's Get Started!",
    subtitle: "",
    image: require("@/assets/images/start.png"),
  },
];



const OnboardingScreen = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (!isLoading && isLoggedIn) return <Redirect href='/home' />;

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = async () => {
    try {
      await AsyncStorage.setItem("hasSeenOnboarding", "true"); // Update AsyncStorage
      if (!isLoading && isLoggedIn) return <Redirect href='/home' />;
      router.replace("/(auth)/sign-in");
    } catch (error) {
      console.error("Error updating AsyncStorage:", error);
    }
  };

  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='flex flex-col items-center justify-center h-full gap-6'>
        <Image source={slides[currentSlide].image} className='w-48 h-48' />

        <View className='text-center'>
          <Text className='text-black font-bold text-[min(50px, 5vw)]'>
            {slides[currentSlide].title}
          </Text>
          <Text className='text-gray-600 text-[min(30px, 5vw)] mt-2'>
            {slides[currentSlide].subtitle}
          </Text>
        </View>

        <View className='flex flex-row gap-2 mt-6'>
          {slides.map((_, index) => (
            <View
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-blue" : "bg-gray-300"
              }`}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={handleNext}
          className='bg-blue py-3 w-[200px] h-14 rounded-lg mt-6'
        >
          <Text className='text-white text-lg text-center font-semibold'>
            {currentSlide === slides.length - 1 ? "Finish" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
