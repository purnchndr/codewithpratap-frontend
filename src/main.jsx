import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// global variables
// window.BACKEND_URL = 'http://localhost:3000';
window.BACKEND_URL = 'https://codewithpratap-backend-production.up.railway.app';

createRoot(document.getElementById('root')).render(
  <App />
  // </StrictMode>
);
