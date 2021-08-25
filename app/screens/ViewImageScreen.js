import { useDimensions } from "@react-native-community/hooks";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

import Screen from "../components/Screen";

export default function ViewImageScreen(image) {
  return (
    <Screen style={styles.container}>
      <MaterialCommunityIcons
        name="close"
        size={35}
        color={defaultStyles.colors.gray}
        style={styles.close}
      />
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={35}
        color={defaultStyles.colors.gray}
        style={styles.delete}
      />
      <Image source={image} style={styles.image} resizeMode="contain" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.darkBackground,

    flex: 1,
  },
  image: {
    width: "100%",
    height: "90%",
    top: 70,
  },
  close: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 30,
    top: 25,
  },
  delete: {
    width: 50,
    height: 50,
    top: 25,
    right: 25,
    position: "absolute",
  },
});
