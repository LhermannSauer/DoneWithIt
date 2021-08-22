import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";
import defaultStyles from "../config/styles";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.name}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    color: defaultStyles.colors.dark,
  },
});

export default PickerItem;
