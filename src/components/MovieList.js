import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeMovie, selectMovie } from '../redux/actions/movieActions';
import { Link } from 'react-router-dom';

class MovieList extends Component {
    handleRemoveMovie = (id) => {
        this.props.removeMovie(id);
    };

    handleSelectMovie = (movie) => {
        this.props.selectMovie(movie);
    };

    render() {
        const { movies } = this.props;

        return (
            <div className="container mt-4">
                <h2 className="mb-4">My Movie List</h2>
                <div className="row">
                    {movies.length > 0 ? (
                        movies.map(movie => (
                            <div key={movie.imdbID} className="col-md-3 mb-4">
                                <div className="movie-card">
                                    <img 
                                        src={movie.Poster} 
                                        alt={movie.Title} 
                                        className="movie-img"
                                    />
                                    <div className="card-body">
                                        <h5>{movie.Title} ({movie.Year})</h5>
                                        <div className="d-flex justify-content-between">
                                            <button 
                                                className="btn btn-danger btn-sm"
                                                onClick={() => this.handleRemoveMovie(movie.imdbID)}
                                            >
                                                Remove
                                            </button>
                                            <Link 
                                                to={`/movie/${movie.imdbID}`} 
                                                className="btn btn-info btn-sm"
                                                onClick={() => this.handleSelectMovie(movie)}
                                            >
                                                View
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No movies in the list.</p>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies
});

const mapDispatchToProps = {
    removeMovie,
    selectMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
