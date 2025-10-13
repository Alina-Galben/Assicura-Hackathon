

export default function Modal({ isOpen, onClose, children }) {
  // Se la prop 'isOpen' è false, il componente non mostra nulla
  if (!isOpen) {
    return null;
  }

  return (
    
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Se l'utente clicca sullo sfondo, il modale si chiude.
    >
      {/* Il box bianco del contenuto */}
      <div
        className="bg-white p-8 rounded-lg shadow-xl relative w-11/12 md:max-w-md"
        onClick={(e) => e.stopPropagation()} // Impedisce la chiusura se si clicca DENTRO il box.
      >
        {/* Pulsante di chiusura (la 'X') */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-3xl font-light"
        >
          &times; {/* Simbolo HTML per la 'X' */}
        </button>
        
        {/* Qui verrà inserito il contenuto che passero da App.jsx */}
        {children}
      </div>
    </div>
  );
}