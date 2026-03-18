import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // <-- THIS MUST MATCH FILE NAME EXACTLY
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
