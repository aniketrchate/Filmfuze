// src/components/MovieSearch.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, addMovie } from '../redux/actions/movieActions';

const MovieSearch = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie);

    const handleSearch = async () => {
        await dispatch(fetchMovie(title));
    };

    const handleAdd = () => {
        if (movie) {
            dispatch(addMovie(movie));
            setTitle('');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Search for a Movie</h2>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Enter movie title" 
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                </div>
            </div>
            {movie && (
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={movie.Poster} className="card-img" alt={movie.Title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{movie.Title} ({movie.Year})</h5>
                                <p className="card-text">{movie.Plot}</p>
                                <button className="btn btn-success" onClick={handleAdd}>Add to List</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieSearch;
