import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const PageLinks = styled.ul`
  display: flex;
`;

const Synopsis = styled.div``;

const Trailer = styled.div``;

export default function RightColumn({ props }) {
  return (
    <Container>
      <PageLinks></PageLinks>
      <Synopsis></Synopsis>
      <Trailer></Trailer>
    </Container>
  );
}
