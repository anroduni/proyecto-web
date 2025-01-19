import React from 'react';
import { useLocation } from 'react-router-dom';

const Titulo = () => {
  const location = useLocation();

  // Mapeo de rutas a títulos
  const titulosPorRuta = {
    '/': 'Bienvenido a la Universidad',
    '/carreras-ingenierias-industrial': 'Ingeniería Industrial',
    '/carreras-ingenierias-sistemas': 'Ingeniería en Sistemas',
    '/carreras-ingenierias-electronica': 'Ingeniería Electrónica',
    '/carreras-maestrias-ingenieria': 'Maestría en Ingeniería',
    '/carreras-maestrias-cienciascomputacionales': 'Maestría en Ciencias Computacionales',
    '/carreras-doctorados-informatica': 'Doctorado en Informática',
    '/carreras-doctorados-fisica': 'Doctorado en Física',
    '/login-profesores': 'Inicio de Sesión - Profesores',
    '/login-alumnos': 'Inicio de Sesión - Alumnos',
    '/login-Administrativo': 'Inicio de Sesión - Administrativo',
    '/nosotros': 'Sobre Nosotros',
  };

  const titulo = titulosPorRuta[location.pathname] || 'Sección';

  return (
    <div className="relative bg-yellow-100 border-4 border-yellow-700 rounded-lg shadow-lg mx-auto mt-4 max-w-4xl p-4 sm:p-6 lg:p-8 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-900">
        {titulo}
      </h1>
    </div>
  );
};

export default Titulo;
