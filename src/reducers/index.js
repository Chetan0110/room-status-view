import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import CommentsReducer from "./reducer_comments";

const rootReducer = combineReducers({
  form: formReducer,
  commentData: CommentsReducer
});

export default rootReducer;
