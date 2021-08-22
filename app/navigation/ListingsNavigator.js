import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import routes from "./routes";

const Stack = createStackNavigator();
export default ListingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen
        name={routes.LISTINGS}
        component={ListingsScreen}
        options={{}}
      />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
};
