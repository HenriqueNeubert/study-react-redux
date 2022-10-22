import React from "react";
import Card from './components/layout/Card'
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";

export default (_) => (
  <div id="app">
    <h1>Fundamentos React</h1>

    <Card title="Desafio Aleatório">
      <Aleatorio min={ 10 }  max={ 42 }>      
      </Aleatorio>
    </Card>

    <Fragmento />
    <ComParametro
      titulo="Situação do aluno"
      aluno="Henrique Neubert"
      nota={3.3}
    />
    <Primeiro />
  </div>
);
