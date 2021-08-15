import React, { useState } from "react";
import { useFormikContext } from "formik";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import ErrorMessage from "./ErrorMessage";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PickerItem from "../pickerItem";
import defaultStyles from "../../config/styles";
import AppPicker from "../AppPicker";

function AppFormPicker({ name, items, icon, placeholder, ...otherProps }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  const [modalVisible, setModalVisible] = useState(false);
  const selectedItem = values[name];
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: { flex: 1, color: defaultStyles.colors.placeholder },
});

export default AppFormPicker;
