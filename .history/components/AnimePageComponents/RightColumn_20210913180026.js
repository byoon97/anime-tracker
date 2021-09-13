import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PageLinks = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  list-style: none;
`;

const Links = styled.div``;

const Synopsis = styled.div``;

const Trailer = styled.div``;

export default function RightColumn({ props }) {
  return (
    <Container>
      <PageLinks>
        <Links>Details</Links>
        <Links>Episodes</Links>
        <Links>Characters</Links>
      </PageLinks>
      <Synopsis></Synopsis>
      <Trailer></Trailer>
    </Container>
  );
}
