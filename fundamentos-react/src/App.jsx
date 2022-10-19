import React from "react";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";

export default (_) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Fragmento />
    <ComParametro
      titulo="Situação do aluno"
      aluno="Henrique Neubert"
      nota={3.3}
    />
    <Primeiro />
  </div>
);
