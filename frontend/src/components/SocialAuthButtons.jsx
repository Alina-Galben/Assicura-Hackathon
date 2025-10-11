import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SocialAuthButtons() {
  const handleGoogleLogin = () => {
    // Reindirizziamo l'utente all'endpoint del nostro backend.
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/google`;
  };

  const handleFacebookLogin = () => {
    // Facciamo la stessa cosa per Facebook.
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/facebook`;
  };

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Oppure continua con</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {/* Pulsante Google */}
        <div>
          <button
            onClick={handleGoogleLogin}
            className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
          >
            <FcGoogle className="h-5 w-5" />
            <span className="text-sm font-semibold leading-6">Google</span>
            
          </button>
        </div>

        {/* Pulsante Facebook */}
        <div>
          <button
            onClick={handleFacebookLogin}
            className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
          >
            <FaFacebook className="h-5 w-5" />
            <span className="text-sm font-semibold leading-6">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}