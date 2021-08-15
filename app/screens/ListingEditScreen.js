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
  { value: 1, label: "Furniture", icon: "floor-lamp", color: "#fc5c65" },
  { value: 2, label: "Cars", icon: "car", color: "#fd9644" },
  { value: 3, label: "Cameras", icon: "camera", color: "#fed330" },
  { value: 4, label: "Games", icon: "cards", color: "#26de81" },
  { value: 5, label: "Clothing", icon: "shoe-heel", color: "#2bcbba" },
  { value: 6, label: "Sports", icon: "basketball", color: "#45aaf2" },
  { value: 7, label: "Movies & Music", icon: "headphones", color: "#4b7bec" },
  { value: 8, label: "Books", icon: "book", color: "#fc5c65" },
  { value: 9, label: "Other", icon: "crosshairs-question", color: "#fd9644" },
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
          width={"40%"}
        />
        <AppFormPicker
          items={categories}
          placeholder="Category"
          name="category"
          width={"50%"}
          iconOptions
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
