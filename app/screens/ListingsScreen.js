import React from "react";
import Card from "../components/Card";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";

const listings = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Red Jacket for Sale",
    price: 100,
  },
  {
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    price: 1000,
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`$ ${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightBackground,
    paddingHorizontal: 15,
  },
});

export default ListingsScreen;
