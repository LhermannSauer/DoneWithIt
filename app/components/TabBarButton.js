import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import Icon from "./Icon";

function TabBarButton({ size = 50 }) {
  return (
    <View style={styles.container}>
      <Icon
        iconColor={colors.white}
        backgroundColor={colors.primary}
        icon="plus-circle"
        size={size}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});

export default TabBarButton;
