import styled from "styled-components";

const Container = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(70, 162, 159);
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: rgb(32, 40, 50);
  font-size: 18px;
`;

const Search = styled.div``;

function NavBar() {
  return (
    <Container>
      <NavLinks>
        <h3>Anime</h3>
        <h3>Manga</h3>
        <h3>Seasons</h3>
        <h3>Community</h3>
      </NavLinks>
    </Container>
  );
}

export default NavBar;
