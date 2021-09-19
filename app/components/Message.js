import React from "react";
import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";

function Message({ width = "80%" }) {
  const [height, setHeight] = useState(40);
  const [text, setText] = useState("");

  return (
    <View style={[styles.container, { height: height, width: width }]}>
      <TextInput
        multiline={true}
        value={text}
        placeholder="Enter your message..."
        style={styles.message}
        onChange={(v) => {
          setText();
          setHeight(120);
        }}
        onPressIn={console.log(2)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 250,
    borderRadius: 15,
    alignItems: "flex-start",
    padding: 5,
    backgroundColor: colors.primaryLight,
  },
});

export default Message;
