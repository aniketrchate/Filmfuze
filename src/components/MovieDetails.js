// src/components/MovieDetails.js
import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
    const selectedMovie = useSelector(state => state.selectedMovie);

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
