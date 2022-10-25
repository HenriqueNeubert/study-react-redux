import React from 'react';
import DiretaFilho from "./DiretaFilho"

export default props => {
  return (
    <div>
      <DiretaFilho nome={'Henrique'} idade={25} nerd={true} />
      <DiretaFilho nome={'Neubert'} idade={40} nerd={false} />
    </div>
  )
}