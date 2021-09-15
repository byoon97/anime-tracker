import styled from "styled-components";

const TitleDiv = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: rgb(70, 162, 159);
  padding-top: 0.5rem;
  flex-direction: row;
  align-items: center;
`;

const JpTitle = styled.div`
  padding-bottom: 0.5;
`;

export default function TitleContainer({ props }) {
  return (
    <div>
      <TitleDiv>
        {props.attributes.canonicalTitle}...
        <JpTitle>{props.attributes.titles.ja_jp}</JpTitle>
      </TitleDiv>
      <TitleDiv>{props.attributes.titles.en}</TitleDiv>
    </div>
  );
}
