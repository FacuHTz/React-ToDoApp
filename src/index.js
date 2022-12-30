import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/index.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  
    <App classname="app" />
  
);

