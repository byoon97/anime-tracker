import React from "react";
import Link from "next/link";
import styled from "styled-components";

const PL = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  list-style: none;
  color: rgb(102, 252, 241);
`;

const LinkStyle = styled.li`
  cursor: pointer;
`;

export default function Links(props) {
  return (
    <PL>
      <Link
        href={{
          pathname: `/anime/` + props.props.id,
        }}
        passHref
      >
        <LinkStyle onClick={() => props.handleClick("details")}>
          Details
        </LinkStyle>
      </Link>
      <Link
        href={{
          pathname: `/anime/` + props.props.id + "/episodes",
        }}
        passHref
      >
        <LinkStyle onClick={() => props.handleClick("episodes")}>
          Episodes
        </LinkStyle>
      </Link>
      <Link
        href={{
          pathname: `/anime/` + props.props.id + "/characters",
        }}
        passHref
      >
        <LinkStyle onClick={() => props.handleClick("characters")}>
          Characters
        </LinkStyle>
      </Link>
    </PL>
  );
}

// Remember this: "Props Down, Events up". Do not try to mutate the parent in the child. You need callbacks on the child (such as onClick, onChange, onWhatever) and the parent will "listen" to the event and provide a callback.
// So I believe your code should look something like:
// handleClick={(link) => setCurrentLink(link)}
