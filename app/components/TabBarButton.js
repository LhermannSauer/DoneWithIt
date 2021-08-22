import React from "react";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import Icon from "./Icon";

function TabBarButton({
  size = 75,
  iconColor = colors.primary,
  backgroundColor = colors.light,
}) {
  return (
    <Icon
      iconColor={iconColor}
      backgroundColor={backgroundColor}
      icon="plus-circle"
      size={size}
      style={styles.icon}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  icon: {
    bottom: 25,
  },
});

export default TabBarButton;
