import { css } from "@emotion/core";
import PropTypes from "prop-types";

export const margins = ({
  marginLeft,
  marginTop,
  marginRight,
  marginBottom,
}) => css`
  margin-left: ${marginLeft && marginLeft};
  margin-top: ${marginTop && marginTop};
  margin-right: ${marginRight && marginRight};
  margin-bottom: ${marginBottom && marginBottom};
`;

export const marginsPropTypes = {
  marginLeft: PropTypes.string,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
};

export const marginsDefaultProps = {
  marginLeft: undefined,
  marginTop: undefined,
  marginRight: undefined,
  marginBottom: undefined,
};
