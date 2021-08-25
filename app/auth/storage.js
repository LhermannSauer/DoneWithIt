import React from "react";
import jwtDecode from "jwt-decode";
import * as SecureStore from "expo-secure-store";
import logger from "../utility/log";

key = "AuthToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (er) {
    logger.log(er.message);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (er) {
    logger.log("error getting the token");
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (er) {
    logger.log("Error removing the token");
  }
};

export default {
  storeToken,
  getToken,
  getUser,
  removeToken,
};
