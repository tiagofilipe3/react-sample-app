import React from "react"
import { FormattedMessage } from "react-intl"
import PropTypes from "prop-types"

import Text from "../Text"
import { textDefaultProps, textProps } from "../Text/textProps"
import { marginsDefaultProps, marginsPropTypes } from "../Container/margins"
import {
  dimensionsDefaultProps,
  dimensionsPropTypes,
} from "../Container/dimensions"

const FormattedText = (props) => {
  const { textId, ...rest } = props

  return (
    <Text {...rest}>
      <FormattedMessage id={textId} />
    </Text>
  )
}

FormattedText.defaultProps = {
  textId: undefined,
  ...textDefaultProps,
  ...marginsDefaultProps,
  ...dimensionsDefaultProps,
}

FormattedText.propTypes = {
  textId: PropTypes.string,
  ...textProps,
  ...marginsPropTypes,
  ...dimensionsPropTypes,
}

export default FormattedText
