import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestions, fetchMovie, addMovie } from '../redux/actions/movieActions';

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const suggestions = useSelector(state => state.suggestions);

    const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        if (value) {
            dispatch(fetchSuggestions(value));
        } else {
            dispatch({ type: 'FETCH_SUGGESTIONS_SUCCESS', payload: [] }); // Clear suggestions if query is empty
        }
    };

    const handleAddMovie = (movie) => {
        dispatch(fetchMovie(movie.Title)); // Fetch full movie details
        dispatch(addMovie(movie)); // Add movie to list
        dispatch({ type: 'FETCH_SUGGESTIONS_SUCCESS', payload: [] }); // Clear suggestions after adding
        setQuery(''); // Clear the input after adding
    };

    return (
        <div className="container mt-4">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                className="form-control"
                placeholder="Search for movies..."
            />
            {suggestions && suggestions.length > 0 && (
                <ul className="list-group mt-2">
                    {suggestions.map((movie) => (
                        <li key={movie.imdbID} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{movie.Title}</strong> ({movie.Year})
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => handleAddMovie(movie)}
                                >
                                    Add to List
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieSearch;
