import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

export const FormikTextField = ({ formikKey, ...props }) => {
  const [field, meta] = useField(formikKey);

  return (
    <TextField
      id={field.name}
      name={field.name}
      helperText={meta.error || ""}
      error={!!meta.error}
      value={field.value}
      onChange={field.onChange}
      style={{ fontFamily: "QS-Regular", width: 433 }}
      {...props}
    />
  );
};

FormikTextField.defaultProps = {
  formikKey: undefined,
};

FormikTextField.propTypes = {
  formikKey: PropTypes.string,
};
