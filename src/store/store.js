import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { reducers } from './reducers/index';
//import { myLogger } from "./middlewares/myLogger";

export const myStore = createStore(reducers, applyMiddleware(logger));