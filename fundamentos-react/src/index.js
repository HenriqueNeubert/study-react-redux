import './index.css'; //? style
import ReactDOM from 'react-dom'; //? método
import React from 'react'; //? react

import Primeiro from './components/basicos/Primeiro';//? component
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDOM.render(
  <div id="app">
    <Primeiro></Primeiro>
    <ComParametro
      titulo="Este é o título"
      aluno="Henrique Neubert" nota={9.3}/>
      <Fragmento />
  </div>, 
  document.getElementById('root')
) 