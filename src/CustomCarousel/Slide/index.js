import React from "react"
import Text from "../../Text"
import Container from "../../Container"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"

const Slide = (props) => {
  const { media, subtitle, title } = props

  return (
    <Container column>
      <Container justifyContent="center">{media}</Container>
      <Container column alignItems="center">
        <Text
          size="xl"
          color="primary-text"
          fontFamily="QS-Regular"
          marginTop="30px"
        >
          <FormattedMessage id={title} />
        </Text>
        <Text
          size="l"
          color="primary-text"
          fontFamily="QS-Regular"
          marginTop="20px"
          textAlign="center"
        >
          <FormattedMessage id={subtitle} />
        </Text>
      </Container>
    </Container>
  )
}

Slide.defaultProps = {
  subtitle: "",
  title: "",
}

Slide.propTypes = {
  media: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

export default Slide
