import './index.css'; //? style
import ReactDOM from 'react-dom'; //? método
import React from 'react'; //? react

import Primeiro from './components/basicos/Primeiro';//? component
import ComParametro from './components/basicos/ComParametro'

const tag = <strong>Olá React!!!</strong>

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro
      titulo="Este é o título"
      aluno="Henrique Neubert" nota={9.3}/>
  </div>, 
  document.getElementById('root')
) 