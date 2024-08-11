import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovie } from '../redux/actions/movieActions';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../theme.css'; 

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedMovie = useSelector(state => state.selectedMovie);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                await dispatch(fetchMovie(id));
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError('Failed to load movie details.');
            }
        };
        
        if (id) {
            fetchMovieDetails();
        }
    }, [id, dispatch]);

    if (loading) {
        return (
            <div className="container mt-4 text-center">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="container mt-4 text-center text-danger">{error}</div>;
    }

    if (!selectedMovie) {
        return <div className="container mt-4 text-center">No movie selected</div>;
    }

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="container mt-4">
            <button className="btn btn-outline-light back-button" onClick={handleBack}>
            <i class="bi bi-arrow-down-left-square-fill"></i> Back
            </button>
            <div className="movie-details-card bg-dark text-white rounded-4 shadow-lg">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img 
                            src={selectedMovie.Poster || 'default-poster.jpg'} 
                            alt={selectedMovie.Title} 
                            className="img-fluid rounded-start movie-poster" 
                        />
                    </div>
                    <div className="col-md-8 p-4">
                        <h2 className="movie-title mb-3">
                            {selectedMovie.Title} ({selectedMovie.Year})
                        </h2>
                        <p className="movie-info mb-2">
                            <strong className="text-primary">Genre:</strong> {selectedMovie.Genre}
                        </p>
                        <p className="movie-info mb-2">
                            <strong className="text-primary">Director:</strong> {selectedMovie.Director}
                        </p>
                        <p className="movie-info mb-2">
                            <strong className="text-primary">Actors:</strong> {selectedMovie.Actors}
                        </p>
                        <p className="movie-info mb-2">
                            <strong className="text-primary">Rating:</strong> {selectedMovie.imdbRating} <i class="bi bi-star"/>
                        </p>
                        <div className="mt-3">
                            <h5 className="plot-heading mb-2">Plot</h5>
                            <p className="movie-plot">{selectedMovie.Plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
