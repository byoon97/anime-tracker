import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 65%;
`;

const PageLinks = styled.div``;

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
