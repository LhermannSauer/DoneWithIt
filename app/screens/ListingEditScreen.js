import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import AppView from "../components/AppView";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(5).label("Title"),
  price: Yup.number().required().positive().max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().min(20),
});

const categories = [
  { value: 1, label: "Cameras" },
  { value: 2, label: "Clothes" },
  { value: 3, label: "Electrical Appliances" },
  { value: 4, label: "Furniture" },
  { value: 5, label: "Musical Instruments" },
];

function ListingEditScreen(props) {
  return (
    <AppView style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          autoCapitalize="sentences"
          autoCorrect
          keyboardType="email-address"
          name="title"
          placeholder="Title"
        />
        <AppFormField
          maxLength={8}
          keyboardType="decimal-pad"
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          placeholder="Category"
          name="category"
        />

        <AppFormField
          maxLength={255}
          autoCapitalize="sentences"
          autoCorrect
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={6}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
});

export default ListingEditScreen;
