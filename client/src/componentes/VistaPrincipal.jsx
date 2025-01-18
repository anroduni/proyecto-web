import React from 'react';
import { Link } from 'react-router-dom';

const VistaPrincipal = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Universidades</h1>
      <nav className="flex flex-col items-center space-y-4">
        <Link to="/inicio" className="text-blue-500 hover:underline">
          Inicio
        </Link>
        <Link to="/portal-alumnos" className="text-blue-500 hover:underline">
          Portal de Alumnos
        </Link>
        <Link to="/portal-profesores" className="text-blue-500 hover:underline">
          Portal de Profesores
        </Link>
        <Link to="/carreras" className="text-blue-500 hover:underline">
          Carreras
        </Link>
        <Link to="/nosotros" className="text-blue-500 hover:underline">
          Nosotros
        </Link>
      </nav>
    </div>
  );
};

export default VistaPrincipal;
