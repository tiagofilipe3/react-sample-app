import styled from "@emotion/styled";
import colors from "../assets/colors";
import {
  margins,
  marginsDefaultProps,
  marginsPropTypes,
} from "../Container/margins";
import {
  dimensions,
  dimensionsDefaultProps,
  dimensionsPropTypes,
} from "../Container/dimensions";
import { textDefaultProps, textProps } from "./textProps";

const Text = styled.div`
  font-size: ${({ size }) =>
    (() => {
      const sizes = {
        xxl: "35px",
        xl: "30px",
        l: "20px",
        s: "18px",
        xs: "16px",
        xxs: "14px",
      };

      return sizes[size] || sizes["s"];
    })()};
  color: ${({ color }) => colors[color] || colors["primary-dark-text"]};
  font-family: ${({ fontFamily }) => fontFamily || "QS-Regular"};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  ${margins}
  ${dimensions}
`;

Text.propTypes = {
  ...textProps,
  ...marginsPropTypes,
  ...dimensionsPropTypes,
};

Text.defaultProps = {
  ...textDefaultProps,
  ...marginsDefaultProps,
  ...dimensionsDefaultProps,
};

export default Text;
