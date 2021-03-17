import { combineReducers } from "redux";
import { productReducer } from "../product/productReducer";

export const rootStore = combineReducers({
    products : productReducer
})