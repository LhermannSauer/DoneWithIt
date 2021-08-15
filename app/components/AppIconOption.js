import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

function AppIconOption({ color, icon, onPress, label }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppIcon
        icon={icon}
        backgroundColor={color}
        style={styles.icon}
        size={75}
        iconColor={defaultStyles.colors.white}
      />
      <AppText style={[defaultStyles.text, styles.text]} numberOfLines={2}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    alignItems: "center",
    flex: 1,
    marginBottom: 25,
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
  },
});

export default AppIconOption;
