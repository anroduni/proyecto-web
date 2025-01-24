

// Portal del Profesor
const PortalProf = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
     
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

        {/*Buscar alumno y asignar */}
        <section className="bg-white p-6 shadow rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Buscar Alumno</h3>
        <div className="flex items-center gap-4 mb-2">
          <select
            className="bg-gray-200 p-2 rounded-lg flex-grow"
            name="materia">
          <option value="redes">Seleccione la Materia</option>
          <option value="redes">Redes</option>
          <option value="prinprog">Principios de programación</option>
          <option value="prinelec">Principios Electrónicos</option>
          </select>
          <input
          type="text"
          placeholder="Número de control"
          className="w-full p-2 bg-white border border-gray-300 rounded-lg flex-grow"
          />
        </div>
          
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Parcial 1</th>
                <th className="px-4 py-2">Parcial 2</th>
                <th className="px-4 py-2">Final</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 border">Juan Perez</td>
                <td className="px-4 py-2 border">10</td>
                <td className="px-4 py-2 border">10</td>
                <td className="px-4 py-2 border">10</td>
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
                placeholder="Número de control"
              />
              <select
               className="bg-gray-100 p-2 rounded-lg flex-grow" name="materia">
                <option value="redes">Seleccione la Materia</option>
                <option value="redes">Redes</option>
                <option value="prinprog">Principios de programación</option>
                <option value="prinelec">Principios Electrónicos</option>
              </select>
              <select
              className="bg-gray-100 p-2 rounded-lg flex-grow" name="materia">
                <option value="Parciales">Seleccionar Parcial</option>
                <option value="Parcial1">Parcial 1</option>
                <option value="Parcial2">Parcial 2</option>
                <option value="Parcial2">Final</option>
              </select>
              <input
                type="number"
                className="border p-2 rounded-lg w-full"
                placeholder="Calificación"
              />

            </div>
            <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Guardar
            </button>
            </div>
            
          </form>
        </section>
        

        {/*Cambios recientes*/}
        <section className="bg-white p-6 shadow rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Cambios recientes</h3>
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Materia</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Parcial 1</th>
                <th className="px-4 py-2">Parcial 2</th>
                <th className="px-4 py-2">Final</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 border">Redes</td>
                <td className="px-4 py-2 border">Juan Perez</td>
                <td className="px-4 py-2 border">10</td>
                <td className="px-4 py-2 border">10</td>
                <td className="px-4 py-2 border">10</td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>
  );
};

export default PortalProf;
