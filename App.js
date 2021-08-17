import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessageScreen from "./app/screens/MessageScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import TabBarButton from "./app/components/TabBarButton";
import Icon from "./app/components/Icon";
import colors from "./app/config/colors";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const ListingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListingsDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Listings">
      <Tab.Screen
        name="Feed"
        component={ListingNavigator}
        options={{
          tabBarIcon: () => <Icon icon="home" iconColor={colors.primary} />,
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        tabBarLabel="Add a new Listing"
        options={{ tabBarIcon: () => <TabBarButton /> }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: () => <Icon icon="account" iconColor={colors.primary} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
