import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";
import AppText from "./AppText";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.warning,
    zIndex: 1,
    elevation: 1,
    top: Constants.statusBarHeight,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    textAlign: "center",
    padding: 10,
  },
});

export default OfflineNotice;
