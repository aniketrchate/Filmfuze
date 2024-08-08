// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import ShareButton from './components/ShareButton';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import your custom CSS

const App = () => {
    const movies = useSelector(state => state.movies);

    return (
        <Router>
            <div className="App">
                <header className="bg-primary text-white text-center py-3">
                    <h1>Movie Organizer</h1>
                </header>
                <MovieSearch />
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
                <ShareButton list={movies} />
            </div>
        </Router>
    );
};

export default App;
