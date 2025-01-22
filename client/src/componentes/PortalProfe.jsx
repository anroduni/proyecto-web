

// Portal del Profesor
const PortalProf = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Portal del Profesor
      </h2>
      <div className="grid gap-6 max-w-6xl mx-auto">
        {/* Materias Impartidas */}
        <section className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Materias Impartidas</h3>
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Materia</th>
                <th className="px-4 py-2">Grupo</th>
                <th className="px-4 py-2">Horario</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 border">Redes</td>
                <td className="px-4 py-2 border">6to Sistemas</td>
                <td className="px-4 py-2 border">Lunes 14:00-16:00</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Registro de Calificaciones */}
        <section className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Registrar Calificaciones</h3>
          <form>
            <div className="grid gap-4 mb-4">
              <input
                type="text"
                className="border p-2 rounded-lg w-full"
                placeholder="Alumno"
              />
              <input
                type="text"
                className="border p-2 rounded-lg w-full"
                placeholder="Materia"
              />
              <input
                type="number"
                className="border p-2 rounded-lg w-full"
                placeholder="Calificación"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Guardar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default PortalProf;
