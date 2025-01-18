import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DesplegableCarreras = ({ categorias }) => {
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  let ocultarTimeout = null;

  const manejarMouseEnter = (categoria) => {
    clearTimeout(ocultarTimeout); // Cancela el retraso al entrar
    setCategoriaActiva(categoria);
    setSubmenuVisible(true);
  };

  const manejarMouseLeave = () => {
    ocultarTimeout = setTimeout(() => {
      setCategoriaActiva(null);
      setSubmenuVisible(false);
    }, 200); // 200 ms de retraso antes de ocultar
  };

  return (
    <div className="relative inline-block" onMouseLeave={manejarMouseLeave}>
      <button
        onMouseEnter={() => manejarMouseEnter(null)}
        className="bg-red-600 text-white p-2 rounded"
      >
        Carreras
      </button>
      {submenuVisible && (
        <ul className="absolute bg-red-700 text-white p-4 mt-2 rounded">
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
                <ul className="absolute left-full top-0 bg-red-800 text-white p-4 mt-2 rounded">
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
  );
};

export default DesplegableCarreras;
