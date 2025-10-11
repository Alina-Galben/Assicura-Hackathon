import { useState, useEffect } from 'react';
import MainLayout from "./layouts/MainLayout";
import Modal from './components/Modal';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { saveToken, removeToken, getUserFromToken } from './utils/auth';

export default function App() {
  // 1. STATI: Per gestire la visibilità del modale, la vista (login/register) e l'utente loggato.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authView, setAuthView] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);

  // 2. Viene eseguito solo una volta all'avvio per controllare se l'utente è già loggato.
  useEffect(() => {
    const user = getUserFromToken();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  
  // 3. FUNZIONI DI GESTIONE (Handlers)
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLoginSuccess = (token) => {
    saveToken(token);
    setCurrentUser(getUserFromToken());
    closeModal();
  };

  const handleLogout = () => {
    removeToken();
    setCurrentUser(null);
  };
  
  return (
    <MainLayout 
      onOpenModal={openModal} 
      user={currentUser} 
      onLogout={handleLogout}
    >
      {/* Contenuto della pagina */}
      <h2 className="text-3xl font-semibold">Il Contenuto della Pagina</h2>
      <p>Questo contenuto verrà mostrato tra la Navbar e il Footer.</p>

      {/* Modale per l'autenticazione */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {authView === 'login' ? (
          // Vista per il LOGIN
          <div>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
            <p className="text-center text-sm mt-4">
              Non hai un account?{' '}
              <button 
                onClick={() => setAuthView('register')} 
                className="font-bold text-blue-500 hover:text-blue-800"
              >
                Registrati
              </button>
            </p>
          </div>
        ) : (
          // Vista per la REGISTRAZIONE
          <div>
            <RegisterForm onSwitchToLogin={() => setAuthView('login')} />
          </div>
        )}
      </Modal>
    </MainLayout>
  );
}