import React from "react";
import Card from "../components/card";
import AppView from "../components/AppView";
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
    <AppView style={styles.container}>
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
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    paddingHorizontal: 15,
  },
});

export default ListingsScreen;
