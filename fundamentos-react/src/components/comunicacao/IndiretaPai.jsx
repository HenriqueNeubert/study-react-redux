import React from 'react';
import IndiretaFilho from "./IndiretaFilho"

export default props => {
  function FornecerInfo(nome, idade, nerd)
  {
    console.log(nome, idade, nerd);
  } 
  return (
    <div>
      Pai
      <IndiretaFilho clicar={FornecerInfo}></IndiretaFilho>
    </div>
  )
}