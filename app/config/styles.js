import { Platform } from "react-native";

import colors from "./colors";

export default defaultStyles = {
  colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
  errorMessage: {
    color: colors.warning,
    fontWeight: "bold",
  },
};
