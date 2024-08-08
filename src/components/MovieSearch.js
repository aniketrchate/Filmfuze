// src/components/MovieSearch.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, fetchSuggestions, addMovie } from '../redux/actions/movieActions'; // Import addMovie
import SuggestionList from './SuggestionList';

const MovieSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const suggestions = useSelector(state => state.suggestions);
    const error = useSelector(state => state.error);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            dispatch(fetchSuggestions(value));
        } else {
            dispatch(fetchSuggestions('')); // Clear suggestions if search term is empty
        }
    };

    const handleAddMovie = (movie) => {
        dispatch(addMovie(movie)); // Add movie directly
    };

    return (
        <div className="container mt-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a movie"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-primary"
                        onClick={() => dispatch(fetchMovie(searchTerm))} // Fetch movie details on button click
                    >
                        Search
                    </button>
                </div>
            </div>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {searchTerm.length > 0 && <SuggestionList suggestions={suggestions} onAddMovie={handleAddMovie} />}
        </div>
    );
};

export default MovieSearch;
