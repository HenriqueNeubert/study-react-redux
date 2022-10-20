import React from "react";

export default (props) => {
  // const min = props.min;
  // const max = props.max;
  const { min, max } = props; //? DESTRUCTOR
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Valor min:{min}</h2>
      <h2>Valor max:{max}</h2>
      <h2>Valor escolhido:{aleatorio}</h2>
    </div>
  );
};
