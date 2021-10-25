import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Search = styled.input`
  border: none;
  height: 1.25rem;
  width: 15rem;
  margin-right: 1rem;
`;

export default function SearchBar() {
  return (
    <SearchContainer>
      <Search placeholder="Search Anime, Mange, and More!..." />
      <SearchIcon />
    </SearchContainer>
  );
}
