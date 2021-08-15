import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../appButton";

function SubmitButton({ title, ...others }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} {...others} />;
}

export default SubmitButton;
