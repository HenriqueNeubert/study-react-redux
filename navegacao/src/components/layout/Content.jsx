import react from "react";
import './Content.css'

import { Routes, Route } from "react-router-dom"; // Importe esses arquivosimport { Routes, Route } from "react-router-dom"; // Importe esses arquivos

import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import Param from "../../views/examples/Param";
// import NotFound from "../../views/examples/NotFound";

const Content = props => (
  <main className="Content">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/param/:param" element={<Param />} />
      <Route path="/home" exact element={<Home />} />
      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
  </main>
)

export default Content