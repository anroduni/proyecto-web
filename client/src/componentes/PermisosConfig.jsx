// PermisosConfig.js
const PermisosConfig = () => {
    return (
      <section className="bg-white p-6 shadow rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Configuración de Permisos
        </h3>
        <p className="text-gray-600 mb-4">
          Define qué pueden hacer los administradores, profesores y alumnos en el sistema.
        </p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
          Configurar Permisos
        </button>
      </section>
    );
  };
  
  export default PermisosConfig;
  