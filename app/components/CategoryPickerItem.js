import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";
import Icon from "./Icon";
import AppText from "./AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        icon={item.icon}
        backgroundColor={item.backgroundColor}
        style={styles.icon}
        size={75}
        iconColor={item.color}
      />
      <AppText style={[defaultStyles.text, styles.text]} numberOfLines={2}>
        {item.name}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "33%",
    alignItems: "center",
    flex: 1,
    marginBottom: 25,
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
  },
});

export default CategoryPickerItem;
