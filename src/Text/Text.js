import styled from "@emotion/styled";
import PropTypes from "prop-types";
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
  size: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  textAlign: PropTypes.string,
  ...marginsPropTypes,
  ...dimensionsPropTypes,
};

Text.defaultProps = {
  size: undefined,
  color: undefined,
  fontFamily: undefined,
  textAlign: undefined,
  ...marginsDefaultProps,
  ...dimensionsDefaultProps,
};

export default Text;
