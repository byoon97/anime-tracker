import styled from "styled-components";
import YouTube from "react-youtube";
import Link from "next/link";

const Container = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
`;

const PageLinks = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  list-style: none;
  color: rgb(102, 252, 241);
`;

const Links = styled.li`
  cursor: pointer;
`;

const Synopsis = styled.div`
  padding-top: 0.5rem;
  color: rgb(70, 162, 159);
`;

const Trailer = styled.div`
  color: rgb(70, 162, 159);
  padding-top: 1rem;
`;

export default function RightColumn({ props }) {
  return (
    <Container>
      <PageLinks>
        <Link>
          <Links>Details</Links>
        </Link>
        <Link>
          <Links>Episodes</Links>
        </Link>
        <Link>
          <Links>Characters</Links>
        </Link>
      </PageLinks>
      <Synopsis>
        Synopsis: <br />
        <br />
        {props.attributes.synopsis}
      </Synopsis>
      <Trailer>
        Trailer: <br />
        <br />
        <YouTube videoId={props.attributes.youtubeVideoId} />
      </Trailer>
    </Container>
  );
}
