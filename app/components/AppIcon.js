import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppIcon({ icon, size, backgroundColor, iconColor }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: backgroundColor,
        borderRadius: size / 2,
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons
        name={icon}
        style={[styles.icon, { fontSize: size / 1.75, color: iconColor }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: defaultStyles.colors.white,
    textAlign: "center",
  },
});

export default AppIcon;
