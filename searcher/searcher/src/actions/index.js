import { SEARCH, FETCH_SEARCH } from "./types";
import google from "../apis/google";
export const Search = data => {
  return {
    type: SEARCH,
    payload: data
  };
};

export const SearchGoogle = (data) => async dispatch => {
  const response = await google.get(
    `v1?key=AIzaSyDJgWH1lZGbIzbs1oqxqQ_cTQNg_myOMOs&cx=012857046315408621809:4wqnt24ljce&q=${data}`
  );

  dispatch({ type: FETCH_SEARCH, payload: response.data });
};
