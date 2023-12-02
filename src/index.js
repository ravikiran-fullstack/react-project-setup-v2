import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './main.scss';

/**
 * ReactDOM.createRoot: Renders App to index html file
 */

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
