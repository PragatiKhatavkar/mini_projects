// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client'; // This is the modern way of rendering the app (React 18+)
import App from './App'; // Import your root App component

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>   
);
