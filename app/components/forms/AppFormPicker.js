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

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
