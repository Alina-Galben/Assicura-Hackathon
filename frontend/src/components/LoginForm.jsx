
import { useState } from 'react';
import { login } from '../services/authService';
import SocialAuthButtons from './SocialAuthButtons';
import PasswordInput from './PasswordInput';

export default function LoginForm({ onLoginSuccess }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Stati per caricamento ed errore
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    // Impedisce alla pagina di ricaricarsi al submit del form
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // 2. Chiama la funzione di login con i dati dello stato
      const response = await login({ email, password });
      onLoginSuccess(response.token); 
      
    } catch (err) {
      setError(err.message || 'Credenziali non valide.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-6">Accedi</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="login-email"
          type="email"
          placeholder="La tua email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Nuova Password con la possibilita di vedere le Password */}
      <PasswordInput
        id="login-password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Mostra i messaggi di errore */}
      {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
      
      <div className="flex items-center justify-between">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:bg-blue-300" 
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Accesso in corso...' : 'Accedi'}
        </button>
      </div>

      {/* Pulsanti social */}
      <SocialAuthButtons />

    </form>
  );
}