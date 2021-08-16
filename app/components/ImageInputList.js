import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <ImageInput
              style={styles.image}
              key={uri}
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          ))}
          <ImageInput
            style={styles.image}
            onChangeImage={(uri) => onAddImage(uri)}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    margin: 5,
  },
});

export default ImageInputList;
