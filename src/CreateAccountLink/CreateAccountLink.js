import React from "react";
import PropTypes from "prop-types";
import FormattedText from "../FormattedText/FormattedText";
import Container from "../Container";

const CreateAccountLink = ({ show, createAccount }) => {
  if (!show) {
    return null;
  }

  return (
    <Container marginTop="40px" justifyContent="center" alignItems="center">
      <FormattedText
        textId="newTo"
        size="xxs"
        style={{ whiteSpace: "break-spaces" }}
      />
      <FormattedText
        textId="invision_"
        size="xxs"
        fontFamily="QS-Bold"
        marginRight="3px"
      />
      <FormattedText
        onClick={createAccount}
        textId="createAccount"
        size="xs"
        color="primary"
        style={{ textDecoration: "underline", cursor: "pointer" }}
      />
    </Container>
  );
};

CreateAccountLink.defaultProps = {
  createAccount: () => {},
  show: false,
};

CreateAccountLink.propTypes = {
  createAccount: PropTypes.func,
  show: PropTypes.bool,
};

export default CreateAccountLink;
