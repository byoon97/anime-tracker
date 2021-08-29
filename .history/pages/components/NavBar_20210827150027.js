import styled from "styled-components";

const Container = styled.nav`
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(70, 162, 159);
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: rgb(32, 40, 50);
  list-style: none;
  font-size: 18px;
  cursor: pointer;
`;

const MenuItems = styled.li`
  margin-left: 1rem;
`;

const SearchContainer = styled.div``;

const SearchBar = styled.input`
  border: none;
  height: 1.25rem;
  width: 15rem;
  margin-right: 1rem;
`;

function NavBar() {
  return (
    <Container>
      <NavLinks>
        <MenuItems>Anime</MenuItems>
        <MenuItems>Manga</MenuItems>
        <MenuItems>Seasons</MenuItems>
        <MenuItems>Community</MenuItems>
      </NavLinks>
      <SearchContainer>
        <SearchBar placeholder="Search Anime, Mange, and More!..." />
      </SearchContainer>
    </Container>
  );
}

export default NavBar;
