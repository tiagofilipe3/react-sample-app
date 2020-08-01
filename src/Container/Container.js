import styled from "@emotion/styled";
import * as PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-top: ${({ marginTop }) => marginTop && marginTop};
  margin-right: ${({ marginRight }) => marginRight && marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom};
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
`;

Container.propTypes = {
  column: PropTypes.bool,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  marginLeft: PropTypes.string,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Container.defaultProps = {
  column: false,
  alignItems: undefined,
  marginLeft: undefined,
  marginTop: undefined,
  marginRight: undefined,
  marginBottom: undefined,
  width: undefined,
  height: undefined,
  justifyContent: undefined
};

export default Container;