import { View, Text, TouchableOpacity,Image } from "react-native";
import React, { useState } from "react";
import { Link, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/context/GlobalProvider";

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
    title: " Stay Organized",
    subtitle: "Track your progress and manage assignments easily.",
    image: require("@/assets/images/progress.png"),
  },
  {
    id: 4,
    title: " AI-Powered Learning",
    subtitle: "Experience personalized learning powered by AI recommendations and an interactive chatbot.",
    image: require("@/assets/images/ai.png"),
  },
  {
    id: 5,
    title: "Let's Get Started!",
    subtitle: "",
    image: require("@/assets/images/start.png"),
  },
];
const App = () => {
  const {isLoading,isLoggedIn}=useGlobalContext()
  if(!isLoading && isLoggedIn) return <Redirect href="/home"/>
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const handleFinish = () => {
   
    return <Redirect href="/home" />;
  };
  return (
    <SafeAreaView className="bg-white h-full">
    <View className="flex flex-col items-center justify-center h-full gap-6">
     
      <Image source={slides[currentSlide].image} className="w-48 h-48" />
      
     
      <View className="text-center">
        <Text className="text-black font-bold text-[min(24px, 5vw)]">
          {slides[currentSlide].title}
        </Text>
        <Text className="text-gray-600 text-lg mt-2">
          {slides[currentSlide].subtitle}
        </Text>
      </View>

      
      <View className="flex flex-row gap-2 mt-6">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-secondary-200" : "bg-gray-300"
            }`}
          />
        ))}
      </View>

    
      <TouchableOpacity
        onPress={currentSlide === slides.length - 1 ? handleFinish : handleNext}
        className="bg-secondary-200 px-6 py-3 rounded-lg mt-6"
      >
        <Text className="text-white text-lg font-semibold">
          {currentSlide === slides.length - 1 ? "Finish" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>


  );
};

export default App;
