import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Detail from "../views/Detail";
import Results from "../views/Results";

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/results/:title" element={ <Results/> }/> //ruta que recibe el @param title
      <Route path="/detail/:movieId" element={ <Detail/> }/>
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
