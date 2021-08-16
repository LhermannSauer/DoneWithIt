import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;

  return (
    <View>
      <AppText style={styles.errorMessage}>{error}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    color: colors.warning,
  },
});

export default ErrorMessage;
