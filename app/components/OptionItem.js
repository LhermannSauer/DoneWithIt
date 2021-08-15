import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

function OptionItem({ Icon, title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Icon />
        <AppText style={styles.text}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: defaultStyles.colors.white,
  },
  text: {
    marginLeft: 10,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});

export default OptionItem;
