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
    <div
      className="relative inline-block"
      onMouseLeave={manejarMouseLeave}
      style={{ zIndex: 50 }}
    >
      <button
        onMouseEnter={() => manejarMouseEnter(null)}
        className="bg-red-600 text-white p-2 rounded md:inline-block"
      >
        Carreras
      </button>

      {/* Submenú para pantallas grandes */}
      <div className="hidden md:block">
        {submenuVisible && (
          <ul className="absolute bg-red-700 text-white p-4 mt-2 rounded shadow-lg z-50">
            {categorias.map((categoria, index) => (
              <li
                key={index}
                onMouseEnter={() => manejarMouseEnter(categoria)}
                onMouseLeave={manejarMouseLeave}
                className="relative"
              >
                <button className="block w-full text-left p-2 hover:bg-red-800">
                  {categoria.nombre}
                </button>
                {categoriaActiva === categoria && (
                  <ul className="absolute left-full top-0 bg-red-800 text-white p-4 mt-2 rounded shadow-lg z-50">
                    {categoria.carreras.map((carrera, idx) => (
                      <li key={idx}>
                        <Link
                          to={carrera.ruta}
                          className="block w-full text-left p-2 hover:bg-red-900"
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
        )}
      </div>

      {/* Submenú para pantallas pequeñas */}
      <div className="md:hidden">
        <button
          onClick={toggleSubmenuMobile}
          className="bg-red-600 text-white p-2 rounded w-full text-left"
        >
          Carreras
        </button>

        {submenuMobileVisible && (
          <div className="bg-red-700 text-white p-4 mt-2 rounded shadow-lg z-50">
            {categorias.map((categoria, index) => (
              <div key={index}>
                <button
                  className="block w-full text-left p-2 hover:bg-red-800"
                  onClick={() => setCategoriaActiva(categoria)}
                >
                  {categoria.nombre}
                </button>
                {categoriaActiva === categoria && (
                  <div className="ml-4">
                    {categoria.carreras.map((carrera, idx) => (
                      <Link
                        to={carrera.ruta}
                        key={idx}
                        className="block text-left p-2 hover:bg-red-900"
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
