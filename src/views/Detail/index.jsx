import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieRatings } from "../../redux/actions/movies"; 

const Detail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();// Dispara las "Actions"

  useEffect(() => {
      dispatch(fetchMovieRatings(movieId));
  }, [dispatch, movieId]);

  return(
    <div>
      Hello
    </div>
  );
} 

export default Detail;