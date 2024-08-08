// src/redux/actions/movieActions.js
import axios from 'axios';
import { ADD_MOVIE, REMOVE_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from '../types';

const API_KEY = 'https://www.omdbapi.com/?t=${movie}&apikey=eb9227a5'; // Replace with your OMDB API key

export const addMovie = (movie) => ({
    type: ADD_MOVIE,
    payload: movie
});

export const removeMovie = (id) => ({
    type: REMOVE_MOVIE,
    payload: id
});

export const fetchMovie = (title) => async (dispatch) => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
        dispatch({
            type: FETCH_MOVIE_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: FETCH_MOVIE_FAILURE,
            payload: error.message
        });
    }
};
