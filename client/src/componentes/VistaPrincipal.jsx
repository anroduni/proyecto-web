import React from 'react';
import { Link } from 'react-router-dom';

const VistaPrincipal = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Título principal */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        Universidades
      </h1>

      {/* Navegación */}
      <nav className="w-full max-w-md flex flex-col items-center space-y-4 sm:space-y-6">
        <Link
          to="/inicio"
          className="w-full text-center text-blue-600 hover:text-blue-700 font-medium py-2 px-4 bg-white shadow rounded-lg hover:shadow-md transition duration-300"
        >
          Inicio
        </Link>
        <Link
          to="/portal-alumnos"
          className="w-full text-center text-blue-600 hover:text-blue-700 font-medium py-2 px-4 bg-white shadow rounded-lg hover:shadow-md transition duration-300"
        >
          Portal de Alumnos
        </Link>
        <Link
          to="/portal-profesores"
          className="w-full text-center text-blue-600 hover:text-blue-700 font-medium py-2 px-4 bg-white shadow rounded-lg hover:shadow-md transition duration-300"
        >
          Portal de Profesores
        </Link>
        <Link
          to="/carreras"
          className="w-full text-center text-blue-600 hover:text-blue-700 font-medium py-2 px-4 bg-white shadow rounded-lg hover:shadow-md transition duration-300"
        >
          Carreras
        </Link>
        <Link
          to="/nosotros"
          className="w-full text-center text-blue-600 hover:text-blue-700 font-medium py-2 px-4 bg-white shadow rounded-lg hover:shadow-md transition duration-300"
        >
          Nosotros
        </Link>
      </nav>
    </div>
  );
};

export default VistaPrincipal;
