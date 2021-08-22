import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { FormField, Form, SubmitButton } from "../components/forms";
import defaultStyles from "../config/styles";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).required().trim().label("Name"),
  email: Yup.string().email().required().trim().label("E-mail"),
  password: Yup.string().min(7).required().trim().label("Password"),
});

function RegisterScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <FormField
          allowFontScaling
          autoCapitalize="words"
          icon="account"
          name="name"
          placeholder="name"
          textContentType="username"
        />
        <FormField
          allowFontScaling
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="email"
          textContentType="emailAddress"
        />
        <FormField
          allowFontScaling
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" color={defaultStyles.colors.secondary} />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: defaultStyles.colors.lightBackground,
    alignItems: "center",
  },
  logo: {
    marginTop: 45,
    width: 80,
    height: 80,
    marginBottom: 15,
  },
});

export default RegisterScreen;
