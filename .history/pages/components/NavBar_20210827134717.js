import styled from "styled-components";

const Container = styled.div`
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
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgb(32, 40, 50);
  list-style: none;
  font-size: 14px;
`;

const Search = styled.div``;

function NavBar() {
  return (
    <Container>
      <NavLinks></NavLinks>
    </Container>
  );
}

export default NavBar;
