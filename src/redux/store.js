// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct named import
import movieReducer from './reducers/movieReducer';

const store = createStore(movieReducer, applyMiddleware(thunk));

export default store;
