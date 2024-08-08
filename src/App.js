// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import ShareButton from './components/ShareButton';

const App = () => {
    const movies = useSelector(state => state.movies);

    return (
        <div className="App">
            <header className="bg-primary text-white text-center py-3">
                <h1>Movie Organizer</h1>
            </header>
            <MovieSearch />
            <MovieList />
            <ShareButton list={movies} />
        </div>
    );
};

export default App;
