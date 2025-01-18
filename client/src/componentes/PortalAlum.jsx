const PortalAlum = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Portal del Alumno</h2>
      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="font-bold">Datos del Alumno</h3>
        <p>Datos semestrales</p>
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Materia</th>
              <th className="border border-gray-300 px-4 py-2">Block1</th>
              <th className="border border-gray-300 px-4 py-2">Block2</th>
              <th className="border border-gray-300 px-4 py-2">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Redes</td>
              <td className="border border-gray-300 px-4 py-2">80</td>
              <td className="border border-gray-300 px-4 py-2">85</td>
              <td className="border border-gray-300 px-4 py-2">83</td>
            </tr>
            {/* Otras materias */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortalAlum;