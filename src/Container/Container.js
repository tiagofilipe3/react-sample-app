import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {
  margins,
  marginsDefaultProps,
  marginsPropTypes,
  paddings,
  paddingsDefaultProps,
  paddingsPropTypes,
} from "./margins";
import {
  dimensions,
  dimensionsDefaultProps,
  dimensionsPropTypes,
} from "./dimensions";

const Container = styled.div`
  ${margins}
  ${paddings}
  ${dimensions}
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  background: ${({ background }) => background && background};
  flex: ${({ flex }) => flex && flex};
  flex-grow: ${({ flexGrow }) => flexGrow && flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink && flexShrink};
`;

Container.propTypes = {
  ...marginsPropTypes,
  ...paddingsPropTypes,
  ...dimensionsPropTypes,
  column: PropTypes.bool,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  background: PropTypes.string,
  flex: PropTypes.string,
  flexGrow: PropTypes.string,
  flexShrink: PropTypes.string,
};

Container.defaultProps = {
  ...marginsDefaultProps,
  ...paddingsDefaultProps,
  ...dimensionsDefaultProps,
  column: false,
  alignItems: undefined,
  justifyContent: undefined,
  background: undefined,
  flex: undefined,
  flexGrow: undefined,
  flexShrink: undefined,
};

export default Container;
