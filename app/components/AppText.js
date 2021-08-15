import React from "react";
import { View, StyleSheet, Text } from "react-native";
import defaultStyles from "../config/styles";

function AppText({ children, style }) {
  return (
    <View>
      <Text style={[defaultStyles.text, style]}>{children}</Text>
    </View>
  );
}

export default AppText;
