// src/components/PasswordInput.jsx
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importiamo le icone "occhio"

// Questo componente accetta diverse props per essere flessibile
export default function PasswordInput({ id, label, value, onChange }) {
  // Stato interno per gestire solo la visibilità della password
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={id}
          // Il tipo di input cambia dinamicamente in base allo stato
          type={showPassword ? 'text' : 'password'}
          placeholder="******************"
          value={value}
          onChange={onChange}
          required
        />
        {/* Pulsante per l'icona, posizionato sopra l'input */}
        <button
          type="button" // 'button' per non inviare il form
          onClick={() => setShowPassword(!showPassword)} // Inverte lo stato al click
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}