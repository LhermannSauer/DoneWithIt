import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

import Button from "../components/Button";
import defaultStyles from "../config/styles";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={[styles.container]}
      blurRadius={2.5}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <Button title="LOGIN" onPress={() => navigation.navigate(routes.LOGIN)} />
      <Button
        title="REGISTER"
        color={defaultStyles.colors.secondary}
        onPress={() => navigation.navigate(routes.REGISTER)}
      />
    </ImageBackground>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: defaultStyles.colors.lightBackground,
  },
  logoContainer: {
    width: "100%",
    position: "absolute",
    top: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    resizeMode: "cover",
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  loginButton: {
    height: 60,
    alignSelf: "center",
    width: "75%",
    backgroundColor: defaultStyles.colors.primary + "11",
    justifyContent: "center",
    marginBottom: 15,
    borderRadius: 20,
    borderColor: "rgba(0,0,0,0.3)",
    borderWidth: 5,
  },
  registerButton: {
    marginBottom: 15,
    height: 60,
    width: "75%",
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "rgba(0,0,0,0.3)",

    backgroundColor: defaultStyles.colors.secondary + "55",
  },
  text: {
    fontSize: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F0F",
    textAlign: "center",
    letterSpacing: 5,
  },
});
