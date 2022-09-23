//***Imports
import { useParams } from 'react-router'
import { useNavigate } from "react-router"
//Movies apiCall hook
import { useFetchMoviesQuery } from '../../redux/api/movies'; 
//Assest
import PalomitasImg from '../../assets/palomitas.jpg'
//Components
import Loading from './components/Loading';
import List from './components/List';
import Error from './components/Error';

/**
 * Results component
 * @returns {jsx} results component view
 */
const Results = () => {
  //***Hooks
  const navigate = useNavigate();
  const { title } = useParams();
  const {data: movies, isLoadin, isFetching, isSuccess, error} = useFetchMoviesQuery(title, {
    //opciones para manipular el fetching
    skip: false,
    pollingInterval: false,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: false,
    refetchOnReconnect: false
  });
  
  //***Handlers
  /**
   * Handle click event in a ListItem
   * @param {string} movieId - Identifier of a movie
   */
  const handleListItemClick = (movieId) => navigate(`/detail/${movieId}`);

  //***Auxiliary functions
  /**
   * Handles rendering of ListItems
   * @returns {Error || Loading || List} Can be return ErrorComponent, LoadingComponent, or ListItem  
   */
  const renderContent = () => {
    if(error) return <Error/>;
    else if(isLoadin || isFetching) return <Loading/>;
    else if(isSuccess && movies?.results) return <List data={movies?.results} onListItemClick={handleListItemClick}/>;
  };

  return (
    <div className="flex flex-row">
      <div className="w-3/5 h-screen overflow-y-auto px-10">
        { renderContent() }
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

/**
 * Results component
 * @module views/Results
 * @see routes/RoutesComponent
 */
export default Results;