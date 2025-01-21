const PieDePagina = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 text-center">
      <p className="text-xs sm:text-sm mb-2 font-bold">Contactanos en</p>
      <div className="flex justify-center space-x-6 sm:space-x-8 mt-2">
        <a href="https://www.facebook.com/unicelsus" className="hover:underline text-xs sm:text-sm"><i className="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/celsus_uni/" className="hover:underline text-xs sm:text-sm"><i className="fab fa-instagram"></i></a>
        <a href="https://wa.me/524612397577" className="hover:underline text-xs sm:text-sm"><i className="fab fa-whatsapp"></i></a>
        <a href="maito:jessica9@gmail.com?subject=Solicitud%20de%20información&body=Hola,%20quisiera%20saber%20más%20sobre%20sus%20servicios." className="hover:underline text-xs sm:text-sm"><i className="fas fa-envelope"></i></a>
        
        <a href="https://www.google.com.mx/maps/place/Centro+Universitario+Celsus/@20.5219116,-100.8031997,17z/data=!3m1!4b1!4m6!3m5!1s0x842cbbf1c5f17ee7:0x3f835c9a56580b2a!8m2!3d20.5219116!4d-100.8031997!16s%2Fg%2F11f9y5v5tx?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D" className="hover:underline text-xs sm:text-sm"><i className="fas fa-map-marker-alt"></i></a>
        
      </div>
      <div className="flex justify-center space-x-6 sm:space-x-8 mt-2">
        <a href="#" className=" text-xs font-sans sm:text-sm"><i className="fas fa-phone-alt">461 245 5166</i></a>
      </div>
    </footer>
  );
};

export default PieDePagina;
