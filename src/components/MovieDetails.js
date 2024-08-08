// src/components/MovieDetails.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../redux/actions/movieActions';

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const selectedMovie = useSelector(state => state.selectedMovie);

    useEffect(() => {
        if (id) {
            dispatch(fetchMovie(id));
        }
    }, [id, dispatch]);

    if (!selectedMovie) {
        return <div className="container mt-4">No movie selected</div>;
    }

    return (
        <div className="container mt-4">
            <h2>{selectedMovie.Title} ({selectedMovie.Year})</h2>
            <div className="row">
                <div className="col-md-4">
                    <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
                    <p><strong>Director:</strong> {selectedMovie.Director}</p>
                    <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
                    <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
                    <p><strong>Rating:</strong> {selectedMovie.imdbRating}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
