import React from "react";

//? por padrão deve-se usar uma div em volto dos elementos
//? caso não queira utilizar dela, use o React.Fragment
//? forma reduzida <></>
export default function Fragmento(props)
{
  return (
  <React.Fragment> 
    <h2>
      fragmento
    </h2>
    <p>
      Cuidado com esse erro
    </p>
  </React.Fragment>
    )
}