
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Necessario per le rotte
import App from './App.jsx';
import './index.css';

// Prende l'elemento radice del HTML
const root = createRoot(document.getElementById('root'));

// Disegna l'intera applicazione al suo interno
root.render(
  <StrictMode>
    {/* BrowserRouter abilita la gestione delle pagine in tutta l'app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);