import React from "react";
import FormattedText from "../FormattedText/FormattedText";
import Container from "../Container";
import PropTypes from "prop-types";

const LoginLink = ({ show, login }) => {
  if (!show) {
    return null;
  }

  return (
    <Container marginTop="40px" justifyContent="center" alignItems="center">
      <FormattedText
        textId="alreadyOn"
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
        onClick={login}
        textId="login"
        size="xs"
        color="primary"
        style={{ textDecoration: "underline", cursor: "pointer" }}
      />
    </Container>
  );
};

LoginLink.defaultProps = {
  login: () => {},
  show: false,
};

LoginLink.propTypes = {
  login: PropTypes.func,
  show: PropTypes.bool,
};

export default LoginLink;
