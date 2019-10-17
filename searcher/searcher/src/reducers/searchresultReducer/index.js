import { FETCH_SEARCH } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return { state: action.payload };
    default:
      return state;
  }
};
