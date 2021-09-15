import styled from "styled-components";
import Trending from "../components/Trending";
import HighestRated from "../components/MostPopular";
import TopAiring from "../components/TopAiring";
import MostPopular from "../components/HighestRated";

export default function Home() {
  return (
    <div>
      <Trending />
      <HighestRated />
      <TopAiring />
    </div>
  );
}
