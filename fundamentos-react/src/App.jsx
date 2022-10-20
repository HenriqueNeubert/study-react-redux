import React from "react";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";

export default (_) => (
  <div id="app">
    <Aleatorio min={ 10 }  max={ 42 }>      
    </Aleatorio>
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
