import styled from "styled-components";
import Trending from "../components/Trending";
import HighestRated from "../components/MostPopular";
import TopAiring from "../components/TopAiring";
import MostPopular from "../components/HighestRated";
import { useState, useEffect } from "react";

// export const getServerSideProps = async (ctx) => {
//   const { req, res } = ctx;
//   const { cookies } = req;

//   if (req) {
//     console.log("on server, need to copy cookies from req");
//   } else {
//     console.log("on client, cookies are automatic");
//   }

//   return {
//     props: { cookies },
//   };
// };

export default function Home({ cookies }) {
  // console.log(cookies);
  // const [loggedIn, setloggedIn] = useState(false);

  // useEffect(() => {
  //   cookies ? setloggedIn(true) : setloggedIn(false);
  // }, []);

  // console.log(loggedIn);
  return (
    <div>
      <Trending />
      <HighestRated />
      <TopAiring />
      <MostPopular />
    </div>
  );
}
