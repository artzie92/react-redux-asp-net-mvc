import { combineReducers } from "redux";
import Products from "./products.store";

const ApplicationReducer = combineReducers({
  Products,
});

export default ApplicationReducer;
