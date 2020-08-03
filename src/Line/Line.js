import styled from "@emotion/styled";
import PropTypes from "prop-types";
import colors from "../assets/colors";

const Line = styled.div`
  height: 1px;
  background-color: ${colors["primary-dark-text"]};
  width: ${({ width }) => width && width};
  opacity: 0.5;
`;

Line.defaultProps = {
  width: undefined,
};

Line.PropTypes = {
  width: PropTypes.string,
};

export default Line;
