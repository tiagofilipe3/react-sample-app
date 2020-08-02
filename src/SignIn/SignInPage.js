import React from "react";
import Container from "../Container";
import AutoRotatingCarousel from "../ZapptsCarousel/AutoRotatingCarousel";
import Slide from "../ZapptsCarousel/Slide";
import PeopleAndGraphs from "../PeopleAndGraphs";

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
      <Container wd="50%" ht="100%" />
    </>
  );
};

export default SignInPage;
