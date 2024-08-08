// src/components/MovieSearch.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestions, addMovie } from '../redux/actions/movieActions';

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const suggestions = useSelector(state => state.suggestions);

    const handleSearch = () => {
        dispatch(fetchSuggestions(query));
    };

    const handleAddMovie = (movie) => {
        dispatch(addMovie(movie));
        setQuery('');
    };

    return (
        <div className="container mt-4">
            <h2>Search for Movies</h2>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for movies"
                />
                <button className="btn btn-primary mt-2" onClick={handleSearch}>Search</button>
            </div>
            {suggestions.length > 0 && (
                <ul className="list-group">
                    {suggestions.map(movie => (
                        <li key={movie.imdbID} className="list-group-item d-flex justify-content-between align-items-center">
                            {movie.Title} ({movie.Year})
                            <button className="btn btn-success" onClick={() => handleAddMovie(movie)}>Add</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieSearch;
