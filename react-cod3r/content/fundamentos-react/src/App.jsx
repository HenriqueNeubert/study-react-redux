import React from "react";
import First from "./components/basics/First";
import ComParam from "./components/basics/Comparam";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";

export default (props) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <div className="listCard">
      <Card titulo="Familia" color="#256">
        <Familia sobrenome="moura">
            <FamiliaMembro nome="ana"></FamiliaMembro>
            <FamiliaMembro nome="anastacia"></FamiliaMembro>
            <FamiliaMembro nome="pedro"></FamiliaMembro>
            <FamiliaMembro nome="joao"></FamiliaMembro> 
        </Familia>
      </Card>
      <Card titulo="Aleatório" color="#911">
        <Aleatorio min={1} max={3} />
      </Card>
      <Card titulo="Com Parâmetro" color="#080">
        <ComParam
        numero={Math.floor(Math.random() * 100)}
          titulo="Teste titulo!!!"
          subtitulo="teste subtitulo"
          numero={49}
        />
      </Card>
    </div>
  </div>
);
