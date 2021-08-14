import { useDimensions } from "@react-native-community/hooks";
import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

import AppButton from "../components/appButton";
import colors from "../config/colors";

export default function WelcomeScreen() {
  const { width, height } = useDimensions();

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
      <AppButton title="LOGIN" />
      <AppButton title="REGISTER" color={colors.secondary} />
    </ImageBackground>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
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
    backgroundColor: colors.primary + "11",
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

    backgroundColor: colors.secondary + "55",
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
