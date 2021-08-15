import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import defaultStyles from "../config/styles";

import ListItem from "../components/lists/ListItem";
import AppView from "../components/AppView";
import AppIcon from "../components/AppIcon";
import ListItemSeparator from "../components/lists/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    onPress: () => console.log(item),
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
    onPress: () => console.log(item),
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

function AccountScreen(props) {
  return (
    <AppView style={styles.container}>
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
              onPress={item.onPress}
              Icon={() => (
                <AppIcon
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
        onPress={() => console.log(item)}
        Icon={() => (
          <AppIcon
            backgroundColor={defaultStyles.colors.yellow}
            size={50}
            icon="logout"
            iconColor={defaultStyles.colors.white}
          />
        )}
        style={[styles.option, { marginTop: 35 }]}
      />
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    backgroundColor: defaultStyles.colors.light,
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
