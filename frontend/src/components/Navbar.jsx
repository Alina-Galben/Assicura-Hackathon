
export default function Navbar({ onOpenModal, user, onLogout }) {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Sezione Sinistra: Logo */}
        <div className="text-3xl font-bold text-blue-600">
          AssicuraPoint
        </div>

        {/* Sezione Destra: Pulsante di Accesso */}
        <div>
          {/* Rendering condizionale */}
          {user ? (
            // Se l'utente è loggato, mostra il suo nome e il pulsante Logout
            <div className="flex items-center gap-4">
              <span className="font-semibold">Ciao, {user.name}!</span>
              <button onClick={onLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Logout
              </button>
            </div>
          ) : (
            // Altrimenti, mostra il pulsante Accedi
          <button 
            onClick={onOpenModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Accedi
          </button>
          )}
        </div>
        
      </div>
    </nav>
  )
}