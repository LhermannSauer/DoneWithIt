import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";
import { View } from "react-native";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import defaultStyles from "../config/styles";
import logger from "../utility/log";

const initialMessages = [
  {
    id: 1,
    title: "Title 1",
    description: "this is a message",
    image: require("../assets/macri.jpg"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "this is a message",
    image: require("../assets/macri.jpg"),
  },
  {
    id: 3,
    title: "Title 4",
    description:
      "this is a really really long message. Honestly, why does this have to be so freaking long... I don't know, maybe just to check how to handle overflow",
    image: require("../assets/macri.jpg"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
    // delete the message from backend
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        style={styles.list}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subtitle={item.description}
            onPress={() => logger.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            renderLeftActions={() => (
              <View
                style={{
                  backgroundColor: "#0F09",
                  width: 70,
                }}
              ></View>
            )}
            showChevrons
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      ></FlatList>
    </Screen>
  );
}

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightBackground,
  },
  list: {},
});
