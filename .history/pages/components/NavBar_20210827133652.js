import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(102, 252, 241);
`;

function NavBar() {
  return <Container>NavBar Goes Here</Container>;
}

export default NavBar;
