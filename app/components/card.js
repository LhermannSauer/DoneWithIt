import React, { Fragment } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import AppText from "./AppText";

import defaultStyles from "../config/styles";

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 25,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    color: defaultStyles.colors.green,
    fontSize: 16,
    fontWeight: "bold",
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Card;
