import { useState } from "react";
import { useNavigate } from "react-router"

import Cine from "../../assets/cine.jpg"

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setSearch(value);
  }
  const handleCleanClick = () => {
    setSearch('');
  }
  const handleSearchClick = () => {
    navigate(`/results/${search.trim()}`);
  }

  return (
    <div class="flex h-screen overflow-hidden">
      <div class="w-2/5">
        <img class="w-full h-full object-cover" src={Cine} alt="imagen de un cine" />
      </div>
      <div class="w-3/5 flex flex-col px-10 justify-center items-center">
        <h2 class="text-3xl font-semibold font-poppins">Busca tu pelicula...</h2>
        <input
          class="bg-special-grey font-poppins w-full my-3 h-9 p-1 border focus:outline-none focus:ring-red-500 focus:ring-2 rounded-md" type="text"
          value={search}
          onChange={handleInputChange}
        />
        <div class="flex w-full justify-between gap-2">
          <button
            class="bg-red-500 text-white w-full hover:bg-red-600 font-poppins rounded shadow-lg h-7 transition-colors"
            onClick={handleSearchClick}
          >
            Buscar
          </button>
          <button
            class="bg-red-500 text-white w-full hover:bg-red-600 font-poppins rounded shadow-lg h-7 transition-colors"
            onClick={handleCleanClick}
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;