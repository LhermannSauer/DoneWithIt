import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import defaultStyles from "../../config/styles";
import AppText from "../AppText";

function ListItem({
  image,
  Icon,
  title,
  subtitle,
  style,
  onPress,
  renderRightActions,
  renderLeftActions,
}) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={[styles.container, style]}>
          {Icon && <Icon />}
          {image && !Icon && <Image source={image} style={styles.userImage} />}
          <View style={styles.detailsText}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    overflow: "hidden",
  },
  detailsText: {
    paddingLeft: 10,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: defaultStyles.colors.primary,
  },
  title: {
    fontSize: 18,
    letterSpacing: 1.4,
    fontWeight: "bold",
  },
  subtitle: {
    color: defaultStyles.colors.gray,
    fontSize: 16,
  },
});

export default ListItem;
