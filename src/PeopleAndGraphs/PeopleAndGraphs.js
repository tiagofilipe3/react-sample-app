import PeopleAndGraphsImg from "../assets/images/PeopleAndGraphs.png";
import React from "react";

const imgStyles = {
  width: "44em",
  marginTop: "112px",
  maxWidth: "100%",
  height: "auto",
};

const PeopleAndGraphs = () => (
  <img src={PeopleAndGraphsImg} alt="People with graphs" style={imgStyles} />
);

export default PeopleAndGraphs;
