import React from "react";
import Container from "../Container";
import AutoRotatingCarousel from "../ZapptsCarousel/AutoRotatingCarousel";
import Slide from "../ZapptsCarousel/Slide";
import PeopleAndGraphs from "../PeopleAndGraphs";
import FormattedText from "../FormattedText/FormattedText";

const SignInPage = () => {
  return (
    <>
      <Container
        background={`#A9C5BA 0% 0% no-repeat padding-box;`}
        wd="50%"
        ht="100%"
        justifyContent="center"
        column
      >
        <Container column ht="100%" alignItems="center">
          <AutoRotatingCarousel label="Get started" autoplay={false}>
            <Slide
              media={<PeopleAndGraphs />}
              title="image.title"
              subtitle="image.title2"
            />
            <Slide
              media={<PeopleAndGraphs />}
              title="image.title"
              subtitle="image.title2"
            />
            <Slide
              media={<PeopleAndGraphs />}
              title="image.title"
              subtitle="image.title2"
            />
            <Slide
              media={<PeopleAndGraphs />}
              title="image.title"
              subtitle="image.title2"
            />
            <Slide
              media={<PeopleAndGraphs />}
              title="image.title"
              subtitle="image.title2"
            />
          </AutoRotatingCarousel>
        </Container>
      </Container>
      <Container wd="50%" ht="100%" column>
        <Container flex="1 0 0%" justifyContent="flex-end" alignItems="center">
          <FormattedText
            size="xxl"
            textId="invision"
            marginTop="120px"
            marginRight="124px"
            fontFamily="Avenir-Heavy"
            color="secondary-dark-text"
          />
        </Container>
        <Container
          flex="9 0 0%"
          justifyContent="flex-start"
          alignItems="center"
          column
        >
          <FormattedText
            textId="welcomeToInvision"
            size="xl"
            fontFamily="QS-Medium"
            marginTop="73px"
          />
          <Container column marginTop="87px">
            Form
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default SignInPage;
