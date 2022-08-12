const ListItem = ({ movie }) => {



  return (
    <div
      className=" p-2 flex w-full min-w-fit"
    >
      <div className="w-4/12 bg-black">
        <img
          src={movie.image?.url}
          alt={movie.image?.url}
          className="object-cover shadow-lg"
        />
      </div>
      <div className="w-8/12 flex flex-col items-start justify-center p-5 gap-4">
        <h2 className="font-poppins font-medium text-xl">
          {movie?.title ?? "..."}
        </h2>
        <div className="font-poppins font-normal">
          <button className="border-red-400 border-2 rounded-md w-40 h-9 text-red-400 hover:bg-red-400 transition-colors hover:text-white">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;