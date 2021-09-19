import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  FormField,
  Form,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import defaultStyles from "../config/styles";
import useAuth from "../auth/useAuth";
import usersApi from "../api/users";
import authApi from "../api/auth";
import { useState } from "react";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import logger from "../utility/log";

const validationSchema = Yup.object().shape({
  username: Yup.string().min(3).required().trim().label("Name"),
  email: Yup.string().email().required().trim().label("E-mail"),
  password: Yup.string().min(7).required().trim().label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected Error ocurred.");
        logger.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Form
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <FormField
          allowFontScaling
          autoCapitalize="words"
          icon="account"
          name="username"
          placeholder="username"
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
