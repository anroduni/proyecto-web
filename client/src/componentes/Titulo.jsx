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
    '/portal-alumnos':'Portal del Alumno',
    '/portal-profesores':'Portal del Profesor',
    '/portal-Administrativo':'Portal Administrativo',

  };

  const titulo = titulosPorRuta[location.pathname] || 'Sección';

  return (
    <div className="w-full relative bg-red-900 border-4 border-red-800 shadow-lg  mt-4 p-2 sm:p-4 lg:p-6 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-200">
        {titulo}
      </h1>
    </div>
  );
};

export default Titulo;
