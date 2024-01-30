import React from "react";

export default (props) => {
//   const minimo = props.min;
//   const maximo = props.max;

  const { min, max} = props;
  const aleatorio = parseInt(Math.floor(Math.random() * (max - min + 1)) + 1)
  return (
    <div>
        <p>Minimo: {min}</p>
        <p>Maximo: {max}</p>
        <p>{aleatorio}</p>
      
    </div>
  );
};
