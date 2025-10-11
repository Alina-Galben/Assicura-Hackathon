import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children, onOpenModal, user, onLogout }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Passo la funzione ricevuta direttamente alla Navbar */}
      <Navbar onOpenModal={onOpenModal} user={user} onLogout={onLogout} />
      {/* 'children' è il segnaposto per il contenuto della pagina */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}