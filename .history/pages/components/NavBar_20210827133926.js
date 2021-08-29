import styled from "styled-components";

const Container = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(70, 162, 159);
  color: rgb(102, 252, 241);
`;

function NavBar() {
  return <Container>NavBar Goes Here</Container>;
}

export default NavBar;
