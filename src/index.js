import React from 'react';
import { createRoot } from 'react-dom/client'; // Nouvelle API
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
