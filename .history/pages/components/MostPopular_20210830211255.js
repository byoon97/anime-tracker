import styled from "styled-components";
import useSWR from "swr";
import AnimeList from "./AnimeList";

//Make seasonal anime dynamic by adding dates
//implement slideshow of animes so users can scroll through them in one section
//add a view more link that links to a page that shows all the seasonal anime, and all previous season animes

let URL = "https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count";

const Container = styled.div`
  width: 100%;
  height: 17rem;
  background-color: rgb(70, 162, 159);
  margin-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3``;

const PosterList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const fetcher = (URL) => fetch(URL).then((res) => res.json());

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
// };

function HighestRated() {
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>Failed to load...</div>;
  if (!data) return <div>Loading...</div>;
  const animes = data.data;

  return (
    <Container>
      <Title>Most Popular Anime</Title>
      <PosterList>
        <AnimeList animes={animes} />
      </PosterList>
    </Container>
  );
}

export default HighestRated;
