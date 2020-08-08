import React from "react";
import styled from "styled-components";

const Container = styled.Text`
  color: white;
  margin-bottom: 5px;
  font-size: 12px;
  color: rgb(220, 220, 220);
`;

const Votes = ({ votes }) => <Container>⭐️ {votes} / 10</Container>;

export default Votes;
