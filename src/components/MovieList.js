import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeMovie, selectMovie } from '../redux/actions/movieActions';
import { Link } from 'react-router-dom';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOption: 'name',
            sortOrder: 'asc',
            showFilters: false
        };
    }

    handleRemoveMovie = (id) => {
        this.props.removeMovie(id);
    };

    handleSelectMovie = (movie) => {
        this.props.selectMovie(movie);
    };

    handleSortChange = (option, order) => {
        this.setState({ sortOption: option, sortOrder: order });
    };

    toggleFilters = () => {
        this.setState((prevState) => ({ showFilters: !prevState.showFilters }));
    };

    getSortedMovies = () => {
        const { movies } = this.props;
        const { sortOption, sortOrder } = this.state;

        return movies.slice().sort((a, b) => {
            if (sortOption === 'name') {
                return sortOrder === 'asc'
                    ? a.Title.localeCompare(b.Title)
                    : b.Title.localeCompare(a.Title);
            } else if (sortOption === 'date') {
                const dateA = new Date(a.dateAdded);
                const dateB = new Date(b.dateAdded);
                return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
            }
            return 0;
        });
    };

    render() {
        const sortedMovies = this.getSortedMovies();
        const { sortOption, sortOrder, showFilters } = this.state;

        return (
            <div className="container mt-4">
                <h2 className="mb-4">My Movie List</h2>
                <button className="btn btn-primary mb-3" onClick={this.toggleFilters}>
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
                {showFilters && (
                    <div className="mb-3">
                        <div className="btn-group" role="group" aria-label="Sort By">
                            <button
                                type="button"
                                className={`btn btn-outline-primary ${sortOption === 'name' && sortOrder === 'asc' ? 'active' : ''}`}
                                onClick={() => this.handleSortChange('name', 'asc')}
                            >
                                Name (A-Z)
                            </button>
                            <button
                                type="button"
                                className={`btn btn-outline-primary ${sortOption === 'name' && sortOrder === 'desc' ? 'active' : ''}`}
                                onClick={() => this.handleSortChange('name', 'desc')}
                            >
                                Name (Z-A)
                            </button>
                            <button
                                type="button"
                                className={`btn btn-outline-primary ${sortOption === 'date' && sortOrder === 'asc' ? 'active' : ''}`}
                                onClick={() => this.handleSortChange('date', 'asc')}
                            >
                                Date Added (Oldest First)
                            </button>
                            <button
                                type="button"
                                className={`btn btn-outline-primary ${sortOption === 'date' && sortOrder === 'desc' ? 'active' : ''}`}
                                onClick={() => this.handleSortChange('date', 'desc')}
                            >
                                Date Added (Newest First)
                            </button>
                        </div>
                    </div>
                )}
                <div className="row">
                    {sortedMovies.length > 0 ? (
                        sortedMovies.map(movie => (
                            <div key={movie.imdbID} className="col-md-3 mb-4">
                                <div className="movie-card">
                                    <img src={movie.Poster} alt={movie.Title} className="movie-img" />
                                    <div className="card-body">
                                        <h5>{movie.Title} ({movie.Year})</h5>
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-danger btn-sm" onClick={() => this.handleRemoveMovie(movie.imdbID)}>
                                                Remove
                                            </button>
                                            <Link to={`/movie/${movie.imdbID}`} className="btn btn-info btn-sm" onClick={() => this.handleSelectMovie(movie)}>
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
