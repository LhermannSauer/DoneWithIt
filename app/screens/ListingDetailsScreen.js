import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";

function ListingDetailsScreen(props) {
  const { price, image, title } = props.route.params.listing;

  return (
    <Screen style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{`$${price}`}</Text>
      </View>
      <ListItem
        image={require("../assets/macri.jpg")}
        title={"Macri Liberal"}
        subtitle={"5 Listings"}
      />
    </Screen>
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
