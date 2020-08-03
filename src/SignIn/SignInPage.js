import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";

import { ReactComponent as GoogleIcon } from "../assets/images/google_logo.svg";
import Container from "../Container";
import AutoRotatingCarousel from "../ZapptsCarousel/AutoRotatingCarousel";
import Slide from "../ZapptsCarousel/Slide";
import PeopleAndGraphs from "../PeopleAndGraphs";
import FormattedText from "../FormattedText/FormattedText";
import { FormikTextField } from "../FormikTextField/FormikTextField";
import Button from "@material-ui/core/Button";
import Line from "../Line/Line";
import colors from "../assets/colors";

let loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const errorStyles = { fontFamily: "QS-Regular", marginTop: 5 };

const signInWithGoogleStyles = {
  backgroundColor: colors["primary-text"],
  padding: "8px 32px",
  borderRadius: "100px",
  boxShadow: "0px 3px 6px #00000029",
};

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
          <Container column marginTop="85px">
            <Formik
              validationSchema={loginSchema}
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                setTimeout(() => {
                  alert(JSON.stringify(values));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Container column>
                    <Container column>
                      <FormikTextField
                        formikKey="email"
                        label="Username or email"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        style={errorStyles}
                      />
                    </Container>
                    <Container column marginTop="30px">
                      <FormikTextField
                        formikKey="password"
                        label="Password"
                        type="password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={errorStyles}
                      />
                    </Container>
                  </Container>
                  <Container justifyContent="flex-end" marginTop="18px">
                    <FormattedText
                      textId="forgotPassword"
                      fontFamily="QS-Regular"
                      color="#707070"
                      size="xxs"
                    />
                  </Container>
                  <Container justifyContent="center" marginTop="30px">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: "#707070",
                        padding: "8px 62px",
                        borderRadius: "100px",
                      }}
                    >
                      <FormattedText
                        color="primary-text"
                        size="xs"
                        textId="signIn"
                        fontFamily="QS-Medium"
                        textTransform="capitalize"
                      />
                    </Button>
                  </Container>
                  <Container
                    marginTop="40px"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Line width="150px" />
                    <FormattedText
                      textId="or"
                      size="xxs"
                      marginLeft="15px"
                      marginRight="15px"
                    />
                    <Line width="150px" />
                  </Container>
                  <Container marginTop="40px" justifyContent="center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      style={signInWithGoogleStyles}
                    >
                      <GoogleIcon style={{ marginRight: 20 }} />
                      <FormattedText
                        color="secondary-dark-text"
                        size="s"
                        textId="signWithGoogle"
                        fontFamily="Lato-Regular"
                        textTransform="initial"
                      />
                    </Button>
                  </Container>
                  <Container
                    marginTop="40px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FormattedText
                      textId="newTo"
                      size="xxs"
                      style={{ whiteSpace: "break-spaces" }}
                    />
                    <FormattedText
                      textId="invision_"
                      size="xxs"
                      fontWeight="bold"
                      marginRight="3px"
                    />
                    <FormattedText
                      textId="createAccount"
                      size="xs"
                      color="primary"
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                    />
                  </Container>
                </Form>
              )}
            </Formik>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default SignInPage;
