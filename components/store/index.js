import { createStore, combineReducers } from "redux";
import { searchReducer } from "../reducer";
const redux = require('redux')

const reduxLogger = require('redux-thunk');
const logger = reduxLogger.thunk
//import promiseMiddleware from 'redux-promise';
//import thunk from "redux-thunk";
//const thunkMiddleware = require('redux-thunk').default;

const rootReducer = combineReducers({
    search: searchReducer,
});

const applyMiddleware = redux.applyMiddleware;

export const store = createStore(rootReducer, applyMiddleware(logger));