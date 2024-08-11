// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const AppHeader = () => {
    const location = useLocation();
    const isMovieDetailsPage = location.pathname.startsWith('/movie/');
    
    return !isMovieDetailsPage ? (
        <header className="bg-primary text-white text-center py-3">
           <h1><i class="bi bi-film"></i> Filmfuze</h1>
        </header>
    ) : null;
};

const AppSearch = () => {
    const location = useLocation();
    const isMovieDetailsPage = location.pathname.startsWith('/movie/');
    
    return !isMovieDetailsPage ? <MovieSearch /> : null;
};

const App = () => {
    return (
        <Router>
            <div className="App">
                <AppHeader />
                <AppSearch />
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/search" element={<MovieSearch />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
