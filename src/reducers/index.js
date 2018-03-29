import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import RoomsReducer from './reducer_rooms';

const rootReducer = combineReducers({
  form: formReducer,
  floorData: RoomsReducer
});

export default rootReducer;
