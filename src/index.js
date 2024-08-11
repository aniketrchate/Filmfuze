import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// Create the root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
