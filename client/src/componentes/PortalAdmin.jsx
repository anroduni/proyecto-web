
// Portal Administrativo
const PortalAdmin = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Portal Administrativo
      </h2>
      <div className="grid gap-6 max-w-6xl mx-auto">
        {/* Gestión de Usuarios */}
        <section className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Gestión de Usuarios</h3>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Agregar Usuario
          </button>
          {/* Tabla de Usuarios */}
          <div className="mt-4">
            <table className="w-full text-left border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Nombre</th>
                  <th className="px-4 py-2">Rol</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">1</td>
                  <td className="px-4 py-2 border">Antonio Pérez</td>
                  <td className="px-4 py-2 border">Profesor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortalAdmin;
  