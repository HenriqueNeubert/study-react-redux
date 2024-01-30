import React from "react";
import First from "./components/basics/First";
import ComParam from "./components/basics/Comparam";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";

export default (props) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <div className="listCard">
      <Card titulo="Aleatório">
        <Aleatorio min={1} max={3} />
      </Card>
      <Card titulo="Com Parâmetro">
        <ComParam
          titulo="Teste titulo!!!"
          subtitulo="teste subtitulo"
          numero={49}
        />
      </Card>
    </div>
  </div>
);
