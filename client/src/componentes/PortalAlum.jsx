// Portal del Alumno
const PortalAlumn = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div className="grid gap-6 max-w-6xl mx-auto">
        {/* Datos del alumno */}
        <section className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Sobre el Alumno</h3>
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-center">Nombre</th>
                <th className="px-4 py-2 text-center">Numero de control</th>
                <th className="px-4 py-2 text-center">Carrera</th>
                <th className="px-4 py-2 text-center">Semestre Actual</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 border text-center">Pedro Martinez</td>
                <td className="px-4 py-2 border text-center">12345678</td>
                <td className="px-4 py-2 border text-center">Sistemas</td>
                <td className="px-4 py-2 border text-center">5</td>
              </tr>
            </tbody>
          </table>
        </section>
        {/* Calificaciones */}
        <section className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Calificaciones</h3>
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Materia</th>
                <th className="px-4 py-2">Profesor</th>
                <th className="px-4 py-2">Parcial 1</th>
                <th className="px-4 py-2">Parcial 2</th>
                <th className="px-4 py-2">Final</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 border">Matemáticas</td>
                <td className="px-4 py-2 border">Miguel Sánchez</td>
                <td className="px-4 py-2 border">85</td>
                <td className="px-4 py-2 border">90</td>
                <td className="px-4 py-2 border">88</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Historial Académico */}
        <section className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Historial Académico</h3>
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Semestre</th>
                <th className="px-4 py-2">Materia</th>
                <th className="px-4 py-2">Profesor</th>
                <th className="px-4 py-2">Calificación Final</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 border">1</td>
                <td className="px-4 py-2 border">Introducción a Programación</td>
                <td className="px-4 py-2 border">Juan Montes</td>
                <td className="px-4 py-2 border">89</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default PortalAlumn;