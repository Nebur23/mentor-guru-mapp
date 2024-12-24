import { useState } from "react";
import { ResizeMode } from "expo-av";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { icons } from "../constants";

const VideoCard = ({
  title,
  creator,
  avatar,
  thumbnail,
  video,
}: {
  title: string;
  creator?: string;
  avatar?: string;
  thumbnail: string;
  video?: string;
}) => {
  const [play, setPlay] = useState(false);
  const player = useVideoPlayer(video as string, player => {
    player.loop = true;
    player.play();
  });

  return (
    <View className='flex flex-col items-center px-4 mb-14 '>
      <View className='flex flex-row gap-3 items-start'>
        <View className='flex justify-center items-center flex-row flex-1'>
          <View className='w-[46px] h-[46px] rounded-lg border border-black flex justify-center items-center p-0.5'>
            <Image
              source={{ uri: avatar }}
              className='w-full h-full rounded-lg'
              resizeMode='cover'
            />
          </View>

          <View className='flextext-blue justify-center flex-1 ml-3 gap-y-1'>
            <Text
              className='font-psemibold text-sm text-black'
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className='text-xs text-gray-600 font-pregular'
              numberOfLines={1}
            >
              by {creator}
            </Text>
          </View>
        </View>

        <View className='pt-2'>
          <Image source={icons.menu} className='w-5 h-5' resizeMode='contain' />
        </View>
      </View>

      {play ? (
        <View className="border border-gray-100 my-2">
          <VideoView
            style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").width * 0.5625,
            }}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
          />
        </View>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className='w-full h-60 rounded-xl mt-3 relative flex justify-center items-center'
        >
          <Image
            source={{ uri: thumbnail }}
            className='w-full h-full rounded-xl mt-3'
            resizeMode='cover'
          />

          <Image
            source={icons.play}
            className='w-12 h-12 absolute'
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
