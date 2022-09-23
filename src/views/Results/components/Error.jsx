const Error = () => {

  return (
    <div className="w-full h-screen flex items-center">
      <div className="border-2 border-red-500 p-5 rounded-lg text-gray-800 min-w-fit">
        <h2 className="font-poppins font-semibold text-2xl">
          ¡Ups a ocurrido un error!
        </h2>
        <h4 className="font-poppins text-sm pt-2">
          Al parecer existe un problema con el servidor, te recomendamos intentar otra busqueda o recargar la página.
        </h4>
      </div>
    </div>
  );
}

export default Error