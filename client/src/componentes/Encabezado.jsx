import React from 'react';
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
  return (
    <header className="bg-red-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Universidad</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/">Inicio</Link></li>
            <li>
            <DesplegableCarreras categorias={categorias} />
            </li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/login-alumnos">Portal Alumnos</Link></li>
            <li><Link to="/login-profesores">Portal Profesores</Link></li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Encabezado;
