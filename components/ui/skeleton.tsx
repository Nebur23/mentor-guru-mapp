import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Dimensions,
  PixelRatio,
} from "react-native";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SCREEN_WIDTH = Dimensions.get("window").width;

export default function SkeletonLoader() {
  const windowHeight = (height: number | string): number => {
    if (!height) {
      return 0;
    }
    const tempHeight = SCREEN_HEIGHT * (parseFloat(height.toString()) / 667);
    return PixelRatio.roundToNearestPixel(tempHeight);
  };

  const windowWidth = (width: number | string): number => {
    if (!width) {
      return 0;
    }
    const tempWidth = SCREEN_WIDTH * (parseFloat(width.toString()) / 480);
    return PixelRatio.roundToNearestPixel(tempWidth);
  };

  return (
    <MotiView
      transition={{
        type: "timing",
      }}
      style={[styles.container, styles.padded]}
      animate={{ backgroundColor: "#fff" }}
    >
      <Skeleton
        width={windowWidth(440)}
        height={windowHeight(160)}
        colorMode='light'
      />
      <Spacer />
      <View style={{ flexDirection: "row", gap: windowWidth(15) }}>
        <Skeleton
          colorMode='light'
          radius='round'
          height={windowWidth(80)}
          width={windowWidth(80)}
        />
        <View>
          <Skeleton
            width={windowWidth(338)}
            height={windowHeight(20)}
            colorMode='light'
          />
          <Spacer />
          <Skeleton
            width={windowWidth(338)}
            height={windowHeight(20)}
            colorMode='light'
          />
          <Spacer />
        </View>
      </View>
    </MotiView>
  );
}

export const Spacer = ({ height = 16 }: { height?: number }) => (
  <View style={{ height }} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  padded: {
    padding: 14,
  },
});
