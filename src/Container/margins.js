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

export const paddings = ({
  paddingLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
}) => css`
  padding-left: ${paddingLeft && paddingLeft};
  padding-top: ${paddingTop && paddingTop};
  padding-right: ${paddingRight && paddingRight};
  padding-bottom: ${paddingBottom && paddingBottom};
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

export const paddingsPropTypes = {
  paddingLeft: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingBottom: PropTypes.string,
};

export const paddingsDefaultProps = {
  paddingsLeft: undefined,
  paddingsTop: undefined,
  paddingsRight: undefined,
  paddingsBottom: undefined,
};
