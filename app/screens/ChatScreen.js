import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingViewBase,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import { Form, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import Icon from "../components/Icon";

function ChatScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/Moonrise.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.chat}></View>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 70}
      >
        <View style={styles.messageBox}>
          <Form></Form>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chat: {
    backgroundColor: colors.primaryDark,
    height: "75%",
    width: "90%",
    borderRadius: 15,
    marginBottom: 15,
  },
  message: {
    color: "green",
    maxHeight: 150,
  },
  messageBox: {
    flexDirection: "row",
    backgroundColor: "red",
    width: "90%",
    borderRadius: 15,
    alignContent: "center",
    justifyContent: "center",
  },
  sendButton: {
    color: colors.primary,
    alignSelf: "center",
    position: "absolute",
    right: 2,
  },
});

export default ChatScreen;
