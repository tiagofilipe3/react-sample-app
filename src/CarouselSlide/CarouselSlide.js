import PeopleAndGraphs from "../PeopleAndGraphs";
import Container from "../Container";
import Text from "../Text";
import { FormattedMessage } from "react-intl";
import React from "react";

const CarouselSlide = () => {
  return (
    <>
      <PeopleAndGraphs />
      <Container column alignItems="center">
        <Text
          size="xl"
          color="primary-text"
          fontFamily="QS-Regular"
          marginTop="30px"
        >
          <FormattedMessage id="image.title" />
        </Text>
        <Text
          size="l"
          color="primary-text"
          fontFamily="QS-Regular"
          marginTop="20px"
          maxWidth="77%"
          textAlign="center"
        >
          <FormattedMessage id="image.title2" />
        </Text>
      </Container>
    </>
  );
};

export default CarouselSlide;
