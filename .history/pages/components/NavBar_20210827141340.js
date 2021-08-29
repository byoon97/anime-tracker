import styled from "styled-components";

const Container = styled.nav`
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(70, 162, 159);
`;

const LinksContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  color: rgb(32, 40, 50);
  list-style: none;
  font-size: 18px;
  cursor: pointer;
`;

const Search = styled.div``;

function NavBar() {
  return (
    <Container>
      <LinksContainer>
        <NavLinks>
          <li>Anime</li>
          <li>Manga</li>
          <li>Seasons</li>
          <li>Community</li>
        </NavLinks>
      </LinksContainer>

      <Search>Search Bar Goes Here</Search>
    </Container>
  );
}

export default NavBar;
