import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import AppView from "../components/AppView";
import defaultStyles from "../config/styles";
import { AppFormField, AppForm, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("E-mail"),
  password: Yup.string().required().min(7).label("Password"),
});

function LogingScreen(props) {
  return (
    <AppView style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  logo: {
    marginTop: 45,
    width: 80,
    height: 80,
    marginBottom: 15,
  },
});

export default LogingScreen;
