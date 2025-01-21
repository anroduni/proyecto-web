import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DesplegableCarreras = ({ categorias }) => {
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [submenuMobileVisible, setSubmenuMobileVisible] = useState(false);
  let ocultarTimeout = null;  // Variable para manejar el retraso de ocultamiento

  const manejarMouseEnter = (categoria) => {
    clearTimeout(ocultarTimeout);  // Cancelar el ocultamiento en caso de que el mouse entre antes
    setCategoriaActiva(categoria);
    setSubmenuVisible(true);
  };

  const manejarMouseLeave = () => {
    ocultarTimeout = setTimeout(() => {
      setSubmenuVisible(false);
      setCategoriaActiva(null);
    }, 200); // Retraso de 200ms antes de ocultar
  };

  const toggleSubmenuMobile = () => {
    setSubmenuMobileVisible(!submenuMobileVisible);
  };

  return (
    <div style={{ zIndex: 50 }}>
      {/* Botón principal para pantallas grandes */}
      <button
        onMouseEnter={() => manejarMouseEnter(null)}
        className="bg-red-950 text-white rounded hidden md:inline-block"
      >
        Carreras
      </button>

      {/* Submenú para pantallas grandes */}
      {submenuVisible && (
        <div className="hidden md:block relative inline-block" onMouseLeave={manejarMouseLeave}>
          <ul className="absolute bg-red-800 text-white  rounded-bl rounded-br shadow-lg z-50">
            {categorias.map((categoria, index) => (
              <li
                key={index}
                onMouseEnter={() => manejarMouseEnter(categoria)}
                className="relative"
              >
                <button className="block w-full text-left p-2 hover:bg-red-900">
                  {categoria.nombre}
                </button>
                {categoriaActiva === categoria && (
                  <ul className="absolute left-full top-0 bg-red-700 text-white p-2  rounded-bl rounded-br shadow-lg z-50">
                    {categoria.carreras.map((carrera, idx) => (
                      <li key={idx}>
                        <Link
                          to={carrera.ruta}
                          className="block w-full text-left p-2 hover:bg-red-800"
                        >
                          {carrera.nombre}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Menú para pantallas pequeñas */}
      <div className="md:hidden">
        <button
          onClick={toggleSubmenuMobile}
          className="bg-red-950 text-white  rounded-bl rounded-br shadow-lg w-full text-left"
        >
          Carreras
        </button>

        {submenuMobileVisible && (
          <div className="bg-red-900 w-full p-2  text-white rounded-bl rounded-br shadow-lg z-50">
            {categorias.map((categoria, index) => (
              <div key={index}>
                <button
                  className="block w-full text-left  hover:bg-red-800"
                  onClick={() => setCategoriaActiva(categoria)}
                >
                  {categoria.nombre}
                </button>
                {categoriaActiva === categoria && (
                  <div className="ml-2">
                    {categoria.carreras.map((carrera, idx) => (
                      <Link
                        to={carrera.ruta}
                        key={idx}
                        className="block text-left pl-4 hover:bg-red-700"
                      >
                        {carrera.nombre}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesplegableCarreras;
