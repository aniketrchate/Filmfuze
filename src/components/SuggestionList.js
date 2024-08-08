// src/components/SuggestionList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/actions/movieActions';

const SuggestionList = ({ suggestions }) => {
    const dispatch = useDispatch();

    const handleSelect = (title) => {
        dispatch(fetchMovie(title));
    };

    return (
        <ul className="list-group mt-2">
            {suggestions.map(movie => (
                <li
                    key={movie.imdbID}
                    className="list-group-item"
                    onClick={() => handleSelect(movie.Title)}
                >
                    {movie.Title} ({movie.Year})
                </li>
            ))}
        </ul>
    );
};

export default SuggestionList;
