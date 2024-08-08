// src/redux/reducers/movieReducer.js
import { ADD_MOVIE, REMOVE_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from '../types';

const initialState = {
    movies: [],
    movie: null,
    error: null
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload]
            };
        case REMOVE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(movie => movie.imdbID !== action.payload)
            };
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                movie: action.payload,
                error: null
            };
        case FETCH_MOVIE_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default movieReducer;
