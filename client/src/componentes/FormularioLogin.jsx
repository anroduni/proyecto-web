const FormularioLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-blue-300 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-lg font-bold mb-4">Inicia Sesión</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="USUARIO"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="CONTRASEÑA"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-4 rounded-lg w-full"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioLogin;