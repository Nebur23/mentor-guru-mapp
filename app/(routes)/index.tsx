import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, RelativePathString } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGlobalContext } from "@/context/GlobalProvider";

const App = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasSeenOnboarding = await AsyncStorage.getItem(
          "hasSeenOnboarding"
        );
        console.log("hasSeenOnboarding:", hasSeenOnboarding);

        if (hasSeenOnboarding === null) {
          setInitialRoute("/(routes)/onboarding");
        } else if (isLoggedIn) {
          setInitialRoute("/home");
        } else {
          setInitialRoute("/(auth)/sign-in");
        }
      } catch (error) {
        console.error("Error checking first launch:", error);
        setInitialRoute("/(auth)/sign-in"); // Fallback route
      }
    };

    // Only run checkFirstLaunch after isLoading is false
    if (!isLoading) {
      checkFirstLaunch();
    }
  }, [isLoading, isLoggedIn]);

  // Show a loading placeholder until we know the route
  if (initialRoute === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' color='#E6C229' />
      </View>
    );
  }

  return <Redirect href={initialRoute as RelativePathString} />;
};

export default App;
