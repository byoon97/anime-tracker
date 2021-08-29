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
  justify-content: space-between  
  margin: 0;
  padding: 0;
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
      <NavLinks>
        <li>Anime</li>
        <li>Manga</li>
        <li>Seasons</li>
        <li>Community</li>
      </NavLinks>

      <Search>Search Bar Goes Here</Search>
    </Container>
  );
}

export default NavBar;
