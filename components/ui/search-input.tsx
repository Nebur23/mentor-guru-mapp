import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { icons } from "@/constants";
import { EvilIcons } from "@expo/vector-icons";

const SearchInput = ({ initialQuery }: { initialQuery: string }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className='flex flex-row items-center space-x-4 mt-2 w-full h-12 px-4 bg-white rounded-2xl'>
      <TextInput
        className='text-base mt-0.5 text-black flex-1 font-pregular'
        value={query}
        placeholder='Search a video topic'
        placeholderTextColor='#CDCDE0'
        onChangeText={e => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/`);
        }}
      >
        <EvilIcons name='search' size={28} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
