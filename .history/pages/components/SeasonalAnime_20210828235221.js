import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: red;
  color: white;
`;

function SeasonalAnime({ anime }) {
  console.log(anime);
  return <Container>Hello</Container>;
}

export default SeasonalAnime;
