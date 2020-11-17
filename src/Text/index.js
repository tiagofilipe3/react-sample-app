import styled from "@emotion/styled"
import colors from "../assets/colors"
import {
  margins,
  marginsDefaultProps,
  marginsPropTypes,
} from "../Container/margins"
import {
  dimensions,
  dimensionsDefaultProps,
  dimensionsPropTypes,
} from "../Container/dimensions"
import { textDefaultProps, textProps } from "./textProps"
import { sizes } from "./sizes"

const Text = styled.div`
  font-size: ${({ size }) => (() => sizes[size] || sizes["s"])()};
  color: ${({ color }) => colors[color] || colors["primary-dark-text"]};
  font-family: ${({ fontFamily }) => fontFamily || "QS-Regular"};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  text-transform: ${({ textTransform }) => textTransform && textTransform};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  ${margins}
  ${dimensions}
`

Text.propTypes = {
  ...textProps,
  ...marginsPropTypes,
  ...dimensionsPropTypes,
}

Text.defaultProps = {
  ...textDefaultProps,
  ...marginsDefaultProps,
  ...dimensionsDefaultProps,
}

export default Text
