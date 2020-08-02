import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { margins, marginsDefaultProps, marginsPropTypes } from "./margins";
import {
  dimensions,
  dimensionsDefaultProps,
  dimensionsPropTypes,
} from "./dimensions";

const Container = styled.div`
  ${margins}
  ${dimensions}
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  background: ${({ background }) => background && background};
`;

Container.propTypes = {
  ...marginsPropTypes,
  ...dimensionsPropTypes,
  column: PropTypes.bool,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  background: PropTypes.string,
};

Container.defaultProps = {
  ...marginsDefaultProps,
  ...dimensionsDefaultProps,
  column: false,
  alignItems: undefined,
  justifyContent: undefined,
  background: undefined,
};

export default Container;
