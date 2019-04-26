import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Config from './config.js';

console.log(Config.API_KEY);

ReactDOM.render(<App />, document.getElementById('root'));
