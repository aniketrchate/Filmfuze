// src/App.js
import React from 'react';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 

const App = () => {

    return (
        <Router>
            <div className="App">
                <header className="bg-primary text-white text-center py-3">
                    <h1>Movie Organizer</h1>
                </header>
                <MovieSearch />
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/search" component={MovieSearch} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
