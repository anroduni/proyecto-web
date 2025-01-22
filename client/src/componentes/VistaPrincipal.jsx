import React from 'react';
import uniImage from '../assets/images/uni.jpg';


const VistaPrincipal = () => {
  return (
<div className="h-screen w-screen flex items-center justify-center bg-gray-100">
  <div className="relative w-full h-full">
    <img 
      src={uniImage}  // Aquí asignamos la imagen importada
      alt="Misión Universidad"
      className="absolute w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
      Explora nuestras secciones
      </h1>
    </div>
  </div>
</div>

  );
};

export default VistaPrincipal;
