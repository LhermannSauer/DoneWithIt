import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import defaultStyles from "../config/styles";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ContactSellerForm from "../components/ContactSellerForm";

function ListingDetailsScreen({ route }) {
  const listing = route.params.listing;

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 70}
      >
        <Screen style={styles.container}>
          <Image
            uri={listing.images[0].url}
            style={styles.image}
            tint="light"
            preview={{ uri: listing.images[0].thumbnailUrl }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{listing.title}</Text>
            <Text style={styles.price}>${listing.price}</Text>
          </View>
          <ListItem
            image={require("../assets/macri.jpg")}
            title={"Macri Liberal"}
            subtitle={"5 Listings"}
          />
          <ContactSellerForm listing={listing} />
        </Screen>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightBackground,
    height: "100%",
  },
  form: {
    marginHorizontal: "5%",
    alignItems: "center",
    justifyContent: "center",
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
