import { useParams } from 'react-router'

import PalomitasImg from '../../assets/palomitas.jpg'

const Results = () => {

  const { title } = useParams();

  return (
    <div className="flex">
      <div className="w-3/5">
        jpj
      </div>
      <div className="w-2/5">
        <img
          src={PalomitasImg}
          alt="Imagen de palomitas de maíz"
          className="h-screen object-cover"
        />
      </div>
    </div>
  );
}

export default Results;