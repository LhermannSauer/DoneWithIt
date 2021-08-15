import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

import ListItem from "../components/lists/ListItem";
import AppView from "../components/AppView";

function ListingDetailsScreen({ title, subtitle, imagePath }) {
  return (
    <AppView style={styles.container}>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Red Jacket for Sale</Text>
        <Text style={styles.price}>$200</Text>
      </View>
      <ListItem
        image={require("../assets/macri.jpg")}
        title={"Macri Liberal"}
        subtitle={"5 Listings"}
      />
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightBackground,
    height: "100%",
  },
  image: {
    width: "100%",
    height: 300,
  },
  imageContainer: {
    width: "90%",
    height: "50%",
    marginTop: 40,
    marginHorizontal: "5%",
  },
  price: {
    color: defaultStyles.colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
  },
});

export default ListingDetailsScreen;
