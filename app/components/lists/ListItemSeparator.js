import React from "react";
import { View } from "react-native";

import defaultStyles from "../../config/styles";

function ListItemSeparator() {
  return (
    <View
      style={{
        width: "100%",
        height: 1.5,
        backgroundColor: defaultStyles.colors.light,
      }}
    />
  );
}

export default ListItemSeparator;
