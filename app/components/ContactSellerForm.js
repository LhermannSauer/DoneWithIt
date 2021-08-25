import React from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { Form, FormField, SubmitButton } from "../components/forms";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import messagesApi from "../api/messages";
import useNotifications from "../hooks/useNotifications";
import logger from "../utility/log";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(10).max(500).label("Message"),
});

function ContactSellerForm({ listing }) {
  useNotifications();

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const response = await messagesApi.send(message, listing.id);

    if (!response.ok) {
      logger.log("Error", result);
    }
    resetForm();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Message sent!",
        body: `Your message has been sent to the owner of  ${listing.title}`,
      },
      trigger: null,
    });
  };

  return (
    <View style={styles.container}>
      <Form
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="sentences"
          autoCorrect={true}
          icon="message"
          name="message"
          numberOfLines={4}
          placeholder={`Send a message `}
          textContentType="emailAddress"
        />
        <SubmitButton title="Send" />
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ContactSellerForm;
