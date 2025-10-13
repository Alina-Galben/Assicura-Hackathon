
import { useState } from 'react';
import { forgotPassword } from '../services/authService'; // Importeremo questa nuova funzione

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await forgotPassword({ email });
      setSuccessMessage(response.message);
    } catch (err) {
      setError(err.message || 'Si è verificato un errore.');
    } finally {
      setIsLoading(false);
    }
  };

  // Se c'è un messaggio di successo, mostra solo quello
  if (successMessage) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Controlla la tua Email</h2>
        <p className="text-green-600">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-6">Recupera Password</h2>
      <p className="text-center text-gray-600 text-sm mb-6">
        Inserisci la tua email e ti invieremo un link per resettare la password.
      </p>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="forgot-email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          id="forgot-email"
          type="email"
          placeholder="La tua email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
      
      <div className="flex items-center justify-between">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:bg-blue-300" 
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Invio in corso...' : 'Invia Link di Recupero'}
        </button>
      </div>
    </form>
  );
}