import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ icon, size = 50, backgroundColor, iconColor, style }) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          backgroundColor: backgroundColor,
          borderRadius: size / 2,
          justifyContent: "center",
        },
        style,
      ]}
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
    textAlign: "center",
  },
});

export default Icon;
