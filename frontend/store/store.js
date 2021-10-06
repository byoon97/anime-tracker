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
export const store = createStore(reducer);
