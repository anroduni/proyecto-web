const PortalProfe = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
        Portal del Profesor
      </h2>
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Materias Impartidas</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Materia</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Grupo</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Día</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Horario</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Redes</td>
                <td className="border border-gray-300 px-4 py-2">sistemas 6to</td>
                <td className="border border-gray-300 px-4 py-2">Lunes</td>
                <td className="border border-gray-300 px-4 py-2">14:00-16:00</td>
              </tr>
              {/* Puedes agregar más filas aquí */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PortalProfe;
