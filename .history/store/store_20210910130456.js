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
      const animes = { ...state.animes };
      animes[action.payload.key] = action.payload.animes;
      return { ...state, animes };
    default:
      return state;
  }
}
export const store = createStore(reducer);

//highestrated "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&sort=-average_rating";

//most popular let URL = "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&sort=-user_count";

//top airing   "https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%10Blimit%5D=5&sort=-userCount";

// trending "https://kitsu.io/api/edge/trending/anime";
