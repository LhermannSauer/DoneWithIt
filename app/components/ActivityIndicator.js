import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
      style={{ zIndex: 1, position: "absolute", bottom: "25%" }}
    />
  );
}

export default ActivityIndicator;
