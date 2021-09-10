import { createStore } from "redux";
const initialState = {
  animes: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "setAnimes":
      return { ...state, animes: action.payload };
  }
}
