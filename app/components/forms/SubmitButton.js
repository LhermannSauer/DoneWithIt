import React from "react";
import { useFormikContext } from "formik";
import Button from "../Button";

function SubmitButton({ title, ...others }) {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onPress={handleSubmit} {...others} />;
}

export default SubmitButton;
