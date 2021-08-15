import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import AppView from "../components/AppView";
import { AppFormField, AppForm, SubmitButton } from "../components/forms";
import colors from "../config/colors";

// email
// password
// registerbutton

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).required().trim().label("Name"),
  email: Yup.string().email().required().trim().label("E-mail"),
  password: Yup.string().min(7).required().trim().label("Password"),
});

function RegisterScreen(props) {
  return (
    <AppView style={styles.container}>
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
        <SubmitButton title="Register" color={colors.secondary} />
      </AppForm>
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default RegisterScreen;
