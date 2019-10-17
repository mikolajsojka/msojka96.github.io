import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import searchresultReducer from "./searchresultReducer";

export default combineReducers({
  search: searchReducer,
  searchresult:searchresultReducer
});
