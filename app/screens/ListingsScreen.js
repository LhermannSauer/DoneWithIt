import React from "react";
import Card from "../components/Card";
import Screen from "../components/Screen";
import { FlatList, StyleSheet, TouchableWithoutFeedback } from "react-native";
import defaultStyles from "../config/styles";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();

  const toListingDetails = () => {
    navigation.navigate("listingDetails");
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => toListingDetails()}>
            <Card
              title={item.title}
              subtitle={`$ ${item.price}`}
              image={item.image}
            />
          </TouchableWithoutFeedback>
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
