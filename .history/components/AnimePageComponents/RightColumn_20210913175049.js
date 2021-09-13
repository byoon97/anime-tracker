import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: row;
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
