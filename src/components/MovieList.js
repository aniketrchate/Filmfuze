// src/components/MovieList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMovie, selectMovie } from '../redux/actions/movieActions';
import { Link } from 'react-router-dom';

const MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);

    const handleRemove = (id) => {
        dispatch(removeMovie(id));
    };

    const handleView = (movie) => {
        dispatch(selectMovie(movie));
    };

    return (
        <div className="container mt-4">
            <h2>My Movie List</h2>
            <div className="row">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.imdbID} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.Title}</h5>
                                    <p className="card-text">{movie.Year}</p>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleRemove(movie.imdbID)}
                                    >
                                        Remove
                                    </button>
                                    <Link
                                        to={`/movie/${movie.imdbID}`}
                                        className="btn btn-primary ml-2"
                                        onClick={() => handleView(movie)}
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No movies in your list</p>
                )}
            </div>
        </div>
    );
};

export default MovieList;
