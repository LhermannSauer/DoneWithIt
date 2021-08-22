import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import defaultStyles from "../config/styles";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  //When using multiple Apifunctions, do not destructure the response, leave it as GetXXXXApi
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.container}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        refreshing={refreshing}
        onRefresh={() => loadListings()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAILS, { listing: item })
            }
          >
            <View>
              <Card
                title={item.title}
                subtitle={`$ ${item.price}`}
                imageUrl={item.images[0].url}
              />
            </View>
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
