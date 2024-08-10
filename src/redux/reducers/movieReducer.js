import { 
    ADD_MOVIE, 
    REMOVE_MOVIE, 
    FETCH_MOVIE_SUCCESS, 
    FETCH_MOVIE_FAILURE, 
    FETCH_SUGGESTIONS_SUCCESS, 
    FETCH_SUGGESTIONS_FAILURE, 
    SELECT_MOVIE 
} from '../types';

const loadMoviesFromLocalStorage = () => {
    try {
        const savedMovies = localStorage.getItem('movies');
        console.log('Loaded movies from localStorage:', savedMovies);
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
    // Check if the movie is already in the list
    const isMovieInList = state.movies.some(movie => movie.imdbID === action.payload.imdbID);
    
    if (isMovieInList) {
        console.log('Movie is already in the list:', action.payload);
        return state; // Don't add the movie if it's already in the list
    }
    
    // Add dateAdded to movie
    const movieWithDate = {
        ...action.payload,
        dateAdded: new Date() // Add the current date
    };

    const updatedMoviesAdd = [...state.movies, movieWithDate];
    localStorage.setItem('movies', JSON.stringify(updatedMoviesAdd));
    console.log('Saved movies to localStorage:', updatedMoviesAdd);
    return {
        ...state,
        movies: updatedMoviesAdd
    };
        case REMOVE_MOVIE:
            const updatedMoviesRemove = state.movies.filter(movie => movie.imdbID !== action.payload);
            localStorage.setItem('movies', JSON.stringify(updatedMoviesRemove));
            console.log('Updated movies in localStorage after removal:', updatedMoviesRemove);
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
