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
      return { ...state, [action.payload.list]: action.payload.animes };
    default:
      return state;
  }
}
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//highestrated "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&sort=-average_rating";

//most popular let URL = "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&sort=-user_count";

//top airing   "https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%10Blimit%5D=5&sort=-userCount";

// trending "https://kitsu.io/api/edge/trending/anime";
