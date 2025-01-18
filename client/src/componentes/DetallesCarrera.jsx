import React from 'react';
import { useLocation } from 'react-router-dom';

const DetallesCarrera = () => {
  const location = useLocation();

  // Definir información diferente según la ruta
  const detallesPorRuta = {
    '/carreras-ingenierias-industrial': {
      nombre: "Ingeniería Industrial",
      descripcion: "Formación en administración de operaciones y optimización de procesos industriales.",
      duracion: "5 años",
      pdf: "/pdf/ingenieria-industrial.pdf",
    },
    '/carreras-ingenierias-sistemas': {
      nombre: "Ingeniería en Sistemas",
      descripcion: "Desarrollo y administración de sistemas computacionales y redes de datos.",
      duracion: "4 años",
      pdf: "/pdf/ingenieria-sistemas.pdf",
    },
    '/carreras-ingenierias-electronica': {
      nombre: "Ingeniería Electrónica",
      descripcion: "Diseño, desarrollo y mantenimiento de sistemas electrónicos y dispositivos.",
      duracion: "5 años",
      pdf: "/pdf/ingenieria-electronica.pdf",
    },
    '/carreras-maestrias-ingenieria': {
      nombre: "Maestría en Ingeniería",
      descripcion: "Especialización en diversas ramas de la ingeniería, como electrónica, civil, mecánica, etc.",
      duracion: "2 años",
      pdf: "/pdf/maestria-ingenieria.pdf",
    },
    '/carreras-doctorados-informatica': {
      nombre: "Doctorado en Informática",
      descripcion: "Investigación avanzada en ciencias de la computación y tecnología.",
      duracion: "4 años",
      pdf: "/pdf/doctorado-informatica.pdf",
    },
    // Puedes agregar más rutas aquí
  };

  // Obtener los detalles según la ruta actual
  const carrera = detallesPorRuta[location.pathname] || {
    nombre: "Carrera no encontrada",
    descripcion: "No se han encontrado detalles para esta carrera.",
    duracion: "-",
    pdf: "#",
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-xl font-bold">{carrera.nombre}</h2>
      <p className="mt-2 text-sm sm:text-base">{carrera.descripcion}</p>
      <p className="mt-2 text-sm sm:text-base">
        <strong>Duración:</strong> {carrera.duracion}
      </p>
      <a 
        href={carrera.pdf} 
        className="text-blue-500 mt-2 inline-block hover:underline" 
        download
      >
        Descargar PDF
      </a>
    </div>
  );
};

export default DetallesCarrera;
