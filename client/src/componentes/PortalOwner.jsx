
  
  // Portal Superusuario
  const PortalOwner = () => {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Portal Owner
        </h2>
        <div className="grid gap-6 max-w-6xl mx-auto">
          {/* Funcionalidades combinadas */}
          <section className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Gestión Avanzada</h3>
            <p className="text-gray-600">
              Acceso a estadísticas, reportes avanzados y configuraciones globales del sistema.
            </p>
          </section>
        </div>
      </div>
    );
  };
  
  export default PortalOwner;
  