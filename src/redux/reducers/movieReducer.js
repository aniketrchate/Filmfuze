// src/redux/reducers/movieReducer.js
import { ADD_MOVIE, REMOVE_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE, FETCH_SUGGESTIONS_SUCCESS, FETCH_SUGGESTIONS_FAILURE } from '../types';

const initialState = {
    movies: JSON.parse(localStorage.getItem('movies')) || [],
    error: null,
    suggestions: []  // Ensure this is initialized as an empty array
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            const updatedMoviesAdd = [...state.movies, action.payload];
            localStorage.setItem('movies', JSON.stringify(updatedMoviesAdd));
            return {
                ...state,
                movies: updatedMoviesAdd
            };
        case REMOVE_MOVIE:
            const updatedMoviesRemove = state.movies.filter(movie => movie.imdbID !== action.payload);
            localStorage.setItem('movies', JSON.stringify(updatedMoviesRemove));
            return {
                ...state,
                movies: updatedMoviesRemove
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
        case FETCH_SUGGESTIONS_SUCCESS:
            return {
                ...state,
                suggestions: action.payload,
                error: null
            };
        case FETCH_SUGGESTIONS_FAILURE:
            return {
                ...state,
                suggestions: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default movieReducer;
