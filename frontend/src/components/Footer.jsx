export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} AssicuraPoint. Tutti i diritti riservati.
      </div>
    </footer>
  )
}