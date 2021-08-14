import React, { Fragment } from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color }) {
  return (
    <TouchableHighlight
      style={[
        styles.button,
        { backgroundColor: color ? color : colors.primary },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "80%",
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20,
    borderWidth: 5,
    borderColor: "#0002",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: colors.white,
    letterSpacing: 6,
    fontWeight: "bold",
  },
});

export default AppButton;