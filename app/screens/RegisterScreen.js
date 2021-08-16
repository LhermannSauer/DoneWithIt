import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppFormField, AppForm, SubmitButton } from "../components/forms";
import defaultStyles from "../config/styles";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).required().trim().label("Name"),
  email: Yup.string().email().required().trim().label("E-mail"),
  password: Yup.string().min(7).required().trim().label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          allowFontScaling
          autoCapitalize="words"
          icon="account"
          name="name"
          placeholder="name"
          textContentType="username"
        />
        <AppFormField
          allowFontScaling
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="email"
          textContentType="emailAddress"
        />
        <AppFormField
          allowFontScaling
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" color={defaultStyles.colors.secondary} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: defaultStyles.colors.lightBackground,
  },
});

export default RegisterScreen;
