// src/components/MovieList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMovie } from '../redux/actions/movieActions';

const MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);

    const handleRemove = (id) => {
        dispatch(removeMovie(id));
    };

    return (
        <div className="container mt-4">
            <h2>My Movie List</h2>
            <div className="row">
                {movies.map(movie => (
                    <div className="col-md-4 mb-4" key={movie.imdbID}>
                        <div className="card">
                            <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.Title}</h5>
                                <p className="card-text">{movie.Plot}</p>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => handleRemove(movie.imdbID)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
