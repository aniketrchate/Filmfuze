// src/App.js
import './App.css';
import React from 'react';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import ShareButton from './components/ShareButton';
const App = () => {
    return (
        <div className="App">
            <header className="bg-primary text-white text-center py-3">
                <h1>Movie Organizer</h1>
            </header>
            <MovieSearch />
            <MovieList />
            <ShareButton list={movies}/>
        </div>
    );
};

export default App;
