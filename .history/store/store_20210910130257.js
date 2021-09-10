import { createStore } from "redux";
const initialState = {
  highestRated: [],
  mostPopular: [],
  topAiring: [],
  trending: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "setAnimes":
      return { ...state, animes: action.payload };
    default:
      return state;
  }
}
const URLS = {
  highestRated:
    "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&sort=-average_rating",
  mostPopular:
    "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&sort=-user_count",
  topAiring:
    "https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%10Blimit%5D=5&sort=-userCount",
  trending: "https://kitsu.io/api/edge/trending/anime",
};
async function loadAnimes(key) {
  const url = URLS[key];

  const animes = await fetch(url)
    .then((r) => r.json())
    .then((r) => r.data);

  return animes;
}

export const store = createStore(reducer);

//highestrated "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&sort=-average_rating";

//most popular let URL = "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&sort=-user_count";

//top airing   "https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%10Blimit%5D=5&sort=-userCount";

// trending "https://kitsu.io/api/edge/trending/anime";
