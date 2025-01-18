const PieDePagina = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 text-center">
      <p className="text-xs sm:text-sm mb-2">Horarios de atención | Ubicación | Copyright</p>
      <div className="flex justify-center space-x-6 sm:space-x-8 mt-2">
        <a href="#" className="hover:underline text-xs sm:text-sm">FACE</a>
        <a href="#" className="hover:underline text-xs sm:text-sm">INSTA</a>
        <a href="#" className="hover:underline text-xs sm:text-sm">WHATS</a>
        <a href="#" className="hover:underline text-xs sm:text-sm">EMAIL</a>
      </div>
    </footer>
  );
};

export default PieDePagina;
