import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import defaultStyles from "../config/styles";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    navigateTo: routes.FEED,
    Icon: {
      backgroundColor: defaultStyles.colors.primary,
      size: 50,
      icon: "format-list-bulleted",
      iconColor: defaultStyles.colors.white,
    },
    style: {
      backgroundColor: defaultStyles.colors.white,
      alignItems: "center",
    },
  },
  {
    title: "My Messages",
    navigateTo: routes.MESSAGES,
    Icon: {
      backgroundColor: defaultStyles.colors.secondary,
      size: 50,
      icon: "email",
      iconColor: defaultStyles.colors.white,
    },
    style: {
      backgroundColor: defaultStyles.colors.white,
      alignItems: "center",
    },
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <ListItem
        image={require("../assets/macri.jpg")}
        title={"Macri Liberal"}
        subtitle={"ahperomacri@tugobierno.com"}
        style={styles.user}
      />
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.navigateTo)}
              Icon={() => (
                <Icon
                  backgroundColor={item.Icon.backgroundColor}
                  size={item.Icon.size}
                  icon={item.Icon.icon}
                  iconColor={item.Icon.iconColor}
                />
              )}
              style={item.style}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <ListItem
        title="Log Out"
        onPress={() => navigation.navigate("Auth")}
        Icon={() => (
          <Icon
            backgroundColor={defaultStyles.colors.yellow}
            size={50}
            icon="logout"
            iconColor={defaultStyles.colors.white}
          />
        )}
        style={[styles.option, { marginTop: 35 }]}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    backgroundColor: defaultStyles.colors.lightBackground,
  },
  user: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.white,
    paddingVertical: 15,
    marginBottom: 30,
  },
  option: {
    backgroundColor: defaultStyles.colors.white,
    alignItems: "center",
  },
});

export default AccountScreen;
