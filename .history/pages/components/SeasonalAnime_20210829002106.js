import React from "react";
import styled from "styled-components";
import useSWR from "swr";

let URL = "https://kitsu.io/api/edge/anime/?filter%5Bseason%5D=summer";

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: red;
  color: white;
`;

const fetcher = (URL) => fetch(URL).then((res) => res.json());

function SeasonalAnime() {
  return <Container>Hello</Container>;
}

export default SeasonalAnime;
