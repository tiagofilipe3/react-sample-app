import React, { useState } from "react"
import { Form, Formik } from "formik"

import { ReactComponent as GoogleIcon } from "../assets/images/google_logo.svg"
import Container from "../Container"
import AutoRotatingCarousel from "../CustomCarousel/AutoRotatingCarousel"
import Slide from "../CustomCarousel/Slide"
import PeopleAndGraphs from "../PeopleAndGraphs"
import FormattedText from "../FormattedText"
import FormikTextField from "../FormikTextField"
import Button from "@material-ui/core/Button"
import Line from "../Line"
import colors from "../assets/colors"
import CreateAccountLink from "../CreateAccountLink"
import LoginLink from "../LoginLink"
import TermsLink from "../TermsLink"

const signInWithGoogleStyles = {
  backgroundColor: colors["primary-text"],
  padding: "8px 32px",
  borderRadius: "100px",
  boxShadow: "0px 3px 6px #00000029",
}

const SignInPage = () => {
  const [signUp, setSignUp] = useState(false)

  return (
    <>
      <Container
        background={`#A9C5BA 0% 0% no-repeat padding-box;`}
        flex={1}
        wd="50%"
        ht="100%"
        justifyContent="center"
        column
      >
        <AutoRotatingCarousel label="Get started" autoplay>
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
      <Container flex={1} ht="100%" column>
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
          paddingLeft="25px"
          paddingRight="25px"
        >
          <FormattedText
            textId={signUp ? "gettingStarted" : "welcomeToInvision"}
            size="xl"
            fontFamily="QS-Medium"
            marginTop={signUp ? "30px" : "73px"}
          />
          <Container column marginTop={signUp ? "20px" : "55px"}>
            <Formik
              enableReinitialize
              validateOnChange={false}
              initialValues={{
                fullname: "",
                username: "",
                password: "",
              }}
              validate={(values) => {
                if (signUp && !values.fullname) {
                  return { fullname: "Fullname is required" }
                }

                if (!values.username) {
                  return { username: "Username is required" }
                }

                if (!values.password) {
                  return { password: "Password is required" }
                }
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true)
                setTimeout(() => {
                  if (signUp) {
                    alert("User created! :)")
                  } else {
                    alert("User logged! :)")
                  }

                  setSubmitting(false)
                  resetForm()
                }, 400)
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Container column>
                    {signUp && (
                      <Container column>
                        <FormikTextField
                          formikKey="fullname"
                          label="Full name"
                        />
                      </Container>
                    )}
                    <Container column marginTop="30px">
                      <FormikTextField
                        formikKey="username"
                        label="Username or email"
                      />
                    </Container>
                    <Container column marginTop="30px">
                      <FormikTextField
                        formikKey="password"
                        label="Password"
                        type="password"
                      />
                    </Container>
                  </Container>
                  {!signUp && (
                    <Container justifyContent="flex-end" marginTop="18px">
                      <FormattedText
                        textId="forgotPassword"
                        fontFamily="QS-Regular"
                        color="#707070"
                        size="xxs"
                      />
                    </Container>
                  )}
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
                        textId={signUp ? "signUp" : "signIn"}
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
                    <Button style={signInWithGoogleStyles}>
                      <GoogleIcon style={{ marginRight: 20 }} />
                      <FormattedText
                        color="secondary-dark-text"
                        size="s"
                        textId={signUp ? "signUpGoogle" : "signWithGoogle"}
                        fontFamily="Lato-Regular"
                        textTransform="initial"
                      />
                    </Button>
                  </Container>
                  <TermsLink show={signUp} />
                  <CreateAccountLink
                    show={!signUp}
                    createAccount={() => setSignUp(true)}
                  />
                  <LoginLink show={signUp} login={() => setSignUp(false)} />
                </Form>
              )}
            </Formik>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default SignInPage
