// src/components/SuggestionList.js
import React from 'react';

const SuggestionList = ({ suggestions, onAddMovie }) => {
    return (
        <div className="suggestion-list mt-3">
            <ul className="list-group">
                {suggestions.map(movie => (
                    <li
                        key={movie.imdbID}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <strong>{movie.Title}</strong> ({movie.Year})
                        </div>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => onAddMovie(movie)}
                        >
                            Add
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SuggestionList;
