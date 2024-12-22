import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Pdf from "react-native-pdf";
import extractIdFromUrl from "@/utils/extractId";

const PdfViewer = ({ id }: { id: string }) => {
  const PdfResource = {
    uri: `https://utfs.io/f/${id}`,
    cache: true,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mentor Guru</Text>
      <Pdf
        trustAllCerts={false}
        source={PdfResource}
        style={styles.pdf}
        onLoadComplete={(numberOfPages: number, filePath: string) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onError={(error: any) => {
          console.error(error);
        }}
      />
    </View>
  );
};

export default PdfViewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
