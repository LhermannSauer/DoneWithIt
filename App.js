import React from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";

export default function App() {
  return (
    // <View style={{ backgroundColor: "#F6D1D0", padding: 20, paddingTop: 50 }}>
    //   <Card
    //     title="Red jacket for sale!"
    //     subtitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    // </View>
    <MessageScreen />
  );
}
