import { combineReducers, createStore } from 'redux';

import { appReducer } from './appReducer';

const rootReducer = combineReducers({
    "app":appReducer,
});//CREATING REDUX STORE


export const store = createStore(rootReducer);