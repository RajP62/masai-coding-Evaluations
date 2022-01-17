import {createStore} from "redux"
import { authReducer as AuthReducer } from "../features/Auth/reducer"
import Thunk from "redux-thunk";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";

export const store = createStore(AuthReducer, window.__REDUX_DEVTOOLS_EXTENSION__());
