import { css } from "@emotion/core";
import PropTypes from "prop-types";

export const dimensions = ({ wd, ht, maxWidth, maxHeight }) => css`
  width: ${wd && wd};
  height: ${ht && ht};
  max-width: ${maxWidth && maxWidth};
  max-height: ${maxHeight && maxHeight};
`;

export const dimensionsPropTypes = {
  wd: PropTypes.string,
  ht: PropTypes.string,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
};

export const dimensionsDefaultProps = {
  wd: undefined,
  ht: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
};
