// src/components/MovieSearch.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, fetchSuggestions } from '../redux/actions/movieActions';
import SuggestionList from './SuggestionList';

const MovieSearch = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const suggestions = useSelector(state => state.suggestions);

    const handleSearch = () => {
        if (title) {
            dispatch(fetchMovie(title));
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setTitle(value);
        if (value.length > 1) { // Fetch suggestions for queries longer than 1 character
            dispatch(fetchSuggestions(value));
        } else {
            dispatch({ type: 'FETCH_SUGGESTIONS_SUCCESS', payload: [] }); // Clear suggestions
        }
    };

    return (
        <div className="container mt-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter movie title"
                    value={title}
                    onChange={handleInputChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                </div>
            </div>
            {title.length > 1 && <SuggestionList suggestions={suggestions} />}
        </div>
    );
};

export default MovieSearch;
