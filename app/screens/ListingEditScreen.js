import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import defaultStyles from "../config/styles";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  Form,
  FormField,
  SubmitButton,
  FormPicker,
  FormImagePicker,
} from "../components/forms";
import categoriesApi from "../api/categories";
import useLocation from "../hooks/useLocation";
import useApi from "../hooks/useApi";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(5).label("Title"),
  price: Yup.number().required().positive().max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().min(20),
  images: Yup.array().min(1, "Please select at least one image"),
});

function ListingEditScreen({ navigation }) {
  const getCategories = useApi(categoriesApi.getCategories);
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    getCategories.request();
  }, []);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.postListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Coult not save the listing.");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField
          maxLength={255}
          autoCapitalize="sentences"
          autoCorrect
          keyboardType="email-address"
          name="title"
          placeholder="Title"
        />
        <FormField
          maxLength={8}
          keyboardType="decimal-pad"
          name="price"
          placeholder="Price"
          width={"40%"}
        />
        <FormPicker
          items={getCategories.data}
          placeholder="Category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          name="category"
          width={"50%"}
          iconOptions
        />

        <FormField
          maxLength={255}
          autoCapitalize="sentences"
          autoCorrect
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={6}
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: defaultStyles.colors.lightBackground,
  },
});

export default ListingEditScreen;
