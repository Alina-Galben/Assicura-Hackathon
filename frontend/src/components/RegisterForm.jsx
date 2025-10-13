
import { useState } from 'react';
import { register } from '../services/authService';
import SocialAuthButtons from './SocialAuthButtons';
import PasswordInput from './PasswordInput';

// 1. Accetta la nuova prop 'onSwitchToLogin'
export default function RegisterForm({ onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // 2. Stato per il messaggio di successo
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const userData = { name, email, password, confirmPassword };
      const response = await register(userData);
      
      // 3. Salvo il messaggio di successo nello stato
      setSuccessMessage(response.message); 

    } catch (err) {
      setError(err.message || 'Si è verificato un errore durante la registrazione.');
    } finally {
      setIsLoading(false);
    }
  };

  // Messaggio di errore se le password non corrispondono
  const passwordMismatchError = password && confirmPassword && password !== confirmPassword;

  // 4. Se c'è un messaggio di successo, sullo schermo va mostrata la conferma
  if (successMessage) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Registrazione Completata!</h2>
        <p className="text-green-600 mb-6">{successMessage}</p>
        <button
          onClick={onSwitchToLogin} // Al click, chiama la funzione passata da App.jsx
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Torna al Login
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-6">Registrati</h2>
      
      {/* Campo Nome */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="register-name">
          Nome
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          id="register-name"
          type="text"
          placeholder="Il tuo nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Campo Email */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="register-email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          id="register-email"
          type="email"
          placeholder="La tua email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Campo Password */}
      <PasswordInput
        id="register-password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Campo Conferma Password */}
      <PasswordInput
        id="confirm-password"
        label="Conferma Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {/* Bonus: Mostra il messaggio di errore in tempo reale */}
      {passwordMismatchError && (
        <p className="text-red-500 text-xs italic">Le password non corrispondono.</p>
      )}

      {/* 4. Mostra i messaggi di errore o successo */}
      {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}

      <div className="flex items-center justify-between mt-6">
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:bg-green-300" 
          type="submit"
          disabled={isLoading} // Disabilita il pulsante durante il caricamento
        >
          {isLoading ? 'Registrazione in corso...' : 'Registrati'}
        </button>
      </div>

      {/* Pulsanti social */}
      <SocialAuthButtons />

    </form>
  );
}