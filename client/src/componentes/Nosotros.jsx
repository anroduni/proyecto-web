import React from 'react';

const Nosotros = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Nosotros</h2>
      
      {/* Contenedor con grid para las secciones de visión, misión y valores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Visión */}
        <div className="bg-gray-200 p-4 rounded-lg shadow">
          <h3 className="font-bold text-center mb-2">Visión</h3>
          <img 
            src="https://source.unsplash.com/500x300/?education,vision" 
            alt="Visión Universidad" 
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <p className="text-center">
            Nuestra visión es ser una institución líder en educación superior, formando profesionales con altos valores humanos y capaces de impactar positivamente en la sociedad global.
          </p>
        </div>

        {/* Misión */}
        <div className="bg-gray-200 p-4 rounded-lg shadow">
          <h3 className="font-bold text-center mb-2">Misión</h3>
          <img 
            src="https://source.unsplash.com/500x300/?education,mission" 
            alt="Misión Universidad" 
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <p className="text-center">
            La misión de nuestra universidad es ofrecer una educación integral que prepare a los estudiantes para enfrentar los retos del futuro, promoviendo la investigación, el emprendimiento y la responsabilidad social.
          </p>
        </div>

        {/* Valores */}
        <div className="bg-gray-200 p-4 rounded-lg shadow">
          <h3 className="font-bold text-center mb-2">Valores</h3>
          <img 
            src="https://source.unsplash.com/500x300/?education,values" 
            alt="Valores Universidad" 
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <p className="text-center">
            Fomentamos los valores de respeto, integridad, compromiso social, y trabajo en equipo para formar estudiantes éticos, responsables y con una visión global del mundo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
