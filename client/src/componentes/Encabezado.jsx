import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DesplegableCarreras from './DesplegableCarreras';

const categorias = [
  {
    nombre: 'Ingenierías',
    carreras: [
      { nombre: 'Ingeniería Industrial', ruta: '/carreras-ingenierias-industrial' },
      { nombre: 'Ingeniería en Sistemas', ruta: '/carreras-ingenierias-sistemas' },
      { nombre: 'Ingeniería Electrónica', ruta: '/carreras-ingenierias-electronica' },
    ],
  },
  {
    nombre: 'Maestrías',
    carreras: [
      { nombre: 'Maestría en Ingeniería', ruta: '/carreras-maestrias-ingenieria' },
      { nombre: 'Maestría en Ciencias Computacionales', ruta: '/carreras-maestrias-cienciascomputacionales' },
    ],
  },
  {
    nombre: 'Doctorados',
    carreras: [
      { nombre: 'Doctorado en Informática', ruta: '/carreras-doctorados-informatica' },
      { nombre: 'Doctorado en Física', ruta: '/carreras-doctorados-fisica' },
    ],
  },
];

const Encabezado = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="bg-red-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Universidad</h1>

        {/* Icono del botón hamburguesa en pantallas pequeñas */}
        <button 
          className="lg:hidden text-white" 
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <i className="fas fa-bars"></i> {/* Icono de menú hamburguesa */}
        </button>

        {/* Menú de navegación para pantallas grandes */}
        <nav className="hidden lg:block">
          <ul className="flex lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
            <li><Link to="/" className="hover:underline">Inicio</Link></li>
            <li>
              {/* Mostrar DesplegableCarreras solo en pantallas grandes */}
              <DesplegableCarreras categorias={categorias} />
            </li>
            <li><Link to="/nosotros" className="hover:underline">Nosotros</Link></li>
            <li><Link to="/login-alumnos" className="hover:underline">Portal Alumnos</Link></li>
            <li><Link to="/login-profesores" className="hover:underline">Portal Profesores</Link></li>
          </ul>
        </nav>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {menuAbierto && (
        <div className="lg:hidden bg-red-600">
          <ul className="flex flex-col space-y-4 py-4 px-2">
            <li><Link to="/" className="text-white hover:underline">Inicio</Link></li>
            {/* Solo mostrar DesplegableCarreras una vez en el menú hamburguesa */}
            {menuAbierto && (
              <li>
                <DesplegableCarreras categorias={categorias} />
              </li>
            )}
            <li><Link to="/nosotros" className="text-white hover:underline">Nosotros</Link></li>
            <li><Link to="/login-alumnos" className="text-white hover:underline">Portal Alumnos</Link></li>
            <li><Link to="/login-profesores" className="text-white hover:underline">Portal Profesores</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Encabezado;
