import React from "react";
import "./Card.css";

export default (props) => {

  const estilo = {
    backgroundColor: props.color || '#222'
  }

  return (
    <div className="Card" style={estilo}>
      <div className="titulo">{props.titulo}</div>
      <div className="conteudo">{props.children}</div>
    </div>
  );
};
