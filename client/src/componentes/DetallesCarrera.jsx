import React from 'react';

const DetallesCarrera = ({ carrera }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{carrera.nombre}</h2>
      <p>{carrera.descripcion}</p>
      <p><strong>Duración:</strong> {carrera.duracion}</p>
      <a href={carrera.pdf} className="text-blue-500" download>Descargar PDF</a>
    </div>
  );
}

export default DetallesCarrera;
