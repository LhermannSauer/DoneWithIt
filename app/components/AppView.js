import React from "react";
import { SafeAreaView } from "react-native";
import Constants from "expo-constants";

function AppView({ children, style }) {
  return (
    <SafeAreaView
      style={{
        paddingTop: Constants.statusBarHeight,
        minHeight: "100%",
        ...style,
      }}
    >
      {children}
    </SafeAreaView>
  );
}

export default AppView;
