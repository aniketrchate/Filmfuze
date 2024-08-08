// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Named import
import movieReducer from './reducers/movieReducer';

// Create the Redux store with thunk middleware
const store = createStore(movieReducer, applyMiddleware(thunk));

export default store;
