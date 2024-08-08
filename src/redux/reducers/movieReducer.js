import { 
    ADD_MOVIE, 
    REMOVE_MOVIE, 
    FETCH_MOVIE_SUCCESS, 
    FETCH_MOVIE_FAILURE, 
    FETCH_SUGGESTIONS_SUCCESS, 
    FETCH_SUGGESTIONS_FAILURE, 
    SELECT_MOVIE 
} from '../types';

// Load movies from local storage or initialize with an empty array if none exist
const loadMoviesFromLocalStorage = () => {
    try {
        const savedMovies = localStorage.getItem('movies');
        return savedMovies ? JSON.parse(savedMovies) : [];
    } catch (error) {
        console.error('Failed to load movies from local storage', error);
        return [];
    }
};

const initialState = {
    movies: loadMoviesFromLocalStorage(),
    suggestions: [],
    selectedMovie: null,
    error: null
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
        case SELECT_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload
            };
        default:
            return state;
    }
};

export default movieReducer;
