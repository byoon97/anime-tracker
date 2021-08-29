import styled from "styled-components";

const Container = styled.nav`
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(70, 162, 159);
`;

// const LinksContainer = styled.div`
//   display: flex;
//   flex: 1;
//   align-items: flex-start;
//   width: 5px;
// `;

const NavLinks = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
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
