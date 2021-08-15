import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
  showChevrons,
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
            {subtitle && (
              <AppText style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              name="chevron-right"
              style={styles.chevron}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  chevron: {
    fontSize: 30,
    alignSelf: "center",
    color: defaultStyles.colors.gray,
    fontWeight: "500",
  },
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    height: 80,
    overflow: "hidden",
  },
  detailsText: {
    paddingLeft: 10,
    flex: 1,
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
