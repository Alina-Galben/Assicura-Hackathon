
import api from '../utils/api';

/** 
 * Funzione per registrare un nuovo utente.
 * @param {object} userData - Dati dell'utente (name, email, password, confirmPassword).
 * @returns {Promise<object>} - La risposta dal server.
 */
export const register = async (userData) => {
  try {
    // Utilizzo la'api' per fare una richiesta POST all'endpoint di registrazione.
    // Axios si occuperà di costruire l'URL completo e di inviare i dati.
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    // Se il backend restituisce un errore (es. email già in uso), lo "rigetta"
    // in modo che il componente possa catturarlo e mostrare il messaggio.
    throw error.response.data;
  }
};

// Funzione per effettuare il login.
export const login = async (credentials) => {
  try {
    // Invia email e password all'endpoint di login
    const response = await api.post('/auth/login', credentials);
    return response.data; // Restituisce i dati (incluso il token)
  } catch (error) {
    // Rigetta l'errore per gestirlo nel componente
    throw error.response.data;
  }
};

/**
 * Recupera i dati del profilo dell'utente loggato.
 */
export const getProfile = async () => {
  try {
    const response = await api.get('/auth/profile');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

/**
 * Invia una richiesta di reset password per l'email specificata.
 * @param {{email: string}} emailData - L'oggetto contenente l'email dell'utente.
 */
export const forgotPassword = async (emailData) => {
  try {
    const response = await api.post('/auth/forgot-password', emailData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

/**
 * Resetta la password dell'utente usando il token.
 * @param {string} token - Il token di reset dall'URL.
 * @param {object} passwordData - Oggetto con la nuova password e la conferma.
 */
export const resetPassword = async (token, passwordData) => {
  try {
    // Il token viene passato come parte dell'URL
    const response = await api.post(`/auth/reset-password/${token}`, passwordData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};