import { useParams } from 'react-router'

import { useFetchMoviesQuery } from '../../redux/api/movies'; 

import PalomitasImg from '../../assets/palomitas.jpg'
import Loading from './components/Loading';
import List from './components/List';

const Results = () => {

  const { title } = useParams();

  const {data: movies, isLoadin, isFetching, isSuccess, error} = useFetchMoviesQuery(title, {
    //opciones para manipular el fetching
    skip: false,
    pollingInterval: false,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: false,
    refetchOnReconnect: false
  });

  return (
    <div className="flex flex-row">
      <div className="w-3/5 h-screen overflow-y-auto px-10">
        { isLoadin || isFetching ? <Loading/> : <List data={movies?.results}/>}
      </div>
      <div className="w-2/5">
        <img
          src={PalomitasImg}
          alt="Imagen de palomitas de maíz"
          className="h-screen object-cover w-full"
        />
      </div>
    </div>
  );
}

export default Results;