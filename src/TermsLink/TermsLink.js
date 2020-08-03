import React from "react";
import PropTypes from "prop-types";
import Container from "../Container";
import FormattedText from "../FormattedText/FormattedText";

const TermsLink = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <Container
        marginTop="40px"
        justifyContent="center"
        style={{ whiteSpace: "break-spaces" }}
      >
        <FormattedText textId="signUpAgree" size="xxs" />
        <FormattedText textId="invision" size="xxs" fontFamily="QS-Bold" />
      </Container>
      <Container
        justifyContent="center"
        marginTop="2px"
        style={{ whiteSpace: "break-spaces" }}
      >
        <FormattedText
          textId="termsOfConditions"
          size="xs"
          color="primary"
          fontFamily="QS-Bold"
          style={{ textDecoration: "underline", cursor: "pointer" }}
        />
        <FormattedText textId="and_" size="xs" />
        <FormattedText
          textId="privacyPolicy"
          size="xs"
          color="primary"
          fontFamily="QS-Bold"
          style={{ textDecoration: "underline", cursor: "pointer" }}
        />
      </Container>
    </>
  );
};

TermsLink.defaultProps = {
  show: false,
};

TermsLink.propTypes = {
  show: PropTypes.bool,
};

export default TermsLink;
