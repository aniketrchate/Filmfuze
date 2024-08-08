// src/components/MovieList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../redux/actions/movieActions';

const MovieList = () => {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeMovie(id));
    };

    return (
        <div className="container mt-4">
            <h2>My Movie List</h2>
            <ul className="list-group">
                {movies.map(movie => (
                    <li key={movie.imdbID} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{movie.Title} ({movie.Year})</h5>
                            <p>{movie.Plot}</p>
                        </div>
                        <button className="btn btn-danger" onClick={() => handleRemove(movie.imdbID)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
