import styled from "styled-components";

const Container = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(70, 162, 159);
  color: #0b0d10;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function NavBar() {
  return <Container>NavBar Goes Here</Container>;
}

export default NavBar;
