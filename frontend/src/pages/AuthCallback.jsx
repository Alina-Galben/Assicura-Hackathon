
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function AuthCallback({ onLoginSuccess }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Leggi il token dall'URL (?token=...)
    const token = searchParams.get('token');

    if (token) {
      // 2. Se c'è un token, chiama la funzione di successo del login
      onLoginSuccess(token);
      // 3. Reindirizza l'utente alla homepage
      navigate('/');
    } else {
      // Se per qualche motivo non c'è il token, torna alla homepage
      console.error("Nessun token trovato nel callback di autenticazione.");
      navigate('/');
    }
  }, [searchParams, navigate, onLoginSuccess]);

  // Questa pagina non mostra nulla, solo un messaggio di caricamento
  return <div>Autenticazione in corso...</div>;
}