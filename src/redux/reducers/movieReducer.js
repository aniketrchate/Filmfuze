// src/redux/reducers/movieReducer.js
import { ADD_MOVIE, REMOVE_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE, FETCH_SUGGESTIONS_SUCCESS, FETCH_SUGGESTIONS_FAILURE } from '../types';

const initialState = {
    movies: [],
    suggestions: [],
    selectedMovie: null,
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
                movies: state.movies.map(movie => movie.imdbID === action.payload.imdbID ? { ...movie, isSelected: true } : movie),
                selectedMovie: action.payload
            };
        case FETCH_MOVIE_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case FETCH_SUGGESTIONS_SUCCESS:
            return {
                ...state,
                suggestions: action.payload
            };
        case FETCH_SUGGESTIONS_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default movieReducer;
