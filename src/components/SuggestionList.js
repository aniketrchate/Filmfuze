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
                    className="list-group-item d-flex justify-content-between align-items-center"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleSelect(movie.Title)}
                >
                    <div>
                        {movie.Title} ({movie.Year})
                    </div>
                    <button
                        className="btn btn-info btn-sm"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the li's onClick
                            handleSelect(movie.Title);
                        }}
                    >
                        View Details
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default SuggestionList;
