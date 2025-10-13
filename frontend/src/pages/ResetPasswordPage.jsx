// src/pages/ResetPasswordPage.jsx
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/authService';
import PasswordInput from '../components/PasswordInput';

export default function ResetPasswordPage({ onLoginSuccess }) {
  // 1. Legge il token dai parametri dell'URL (es. /reset-password/MIO_TOKEN)
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Le password non corrispondono.');
      return;
    }
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await resetPassword(token, { password, confirmPassword });
      setSuccessMessage(response.message + ' Verrai reindirizzato tra 3 secondi...');
      
      // Dopo il successo, salviamo il token di login e reindirizziamo alla homepage
      setTimeout(() => {
        onLoginSuccess(response.token);
        navigate('/');
      }, 3000);

    } catch (err) {
      setError(err.message || 'Si è verificato un errore.');
    } finally {
      setIsLoading(false);
    }
  };

  const passwordMismatchError = password && confirmPassword && password !== confirmPassword;

  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-full max-w-md">
        {successMessage ? (
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Password Aggiornata!</h2>
            <p className="text-green-600">{successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Imposta Nuova Password</h2>
            
            <PasswordInput
                id="reset-password"
                label="Nuova Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <PasswordInput
                id="reset-confirm-password"
                label="Conferma Nuova Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {passwordMismatchError && (
                <p className="text-red-500 text-xs italic">Le password non corrispondono.</p>
            )}

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reset-confirm-password">
                Conferma Nuova Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3"
                id="reset-confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
            
            <div className="flex items-center justify-between">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full disabled:bg-blue-300" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Salvataggio...' : 'Salva Nuova Password'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}