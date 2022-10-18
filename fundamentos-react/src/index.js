import './index.css'; //? style
import ReactDOM from 'react-dom'; //? método
import React from 'react'; //? react

import Primeiro from './components/basicos/Primeiro';//? component

const el = document.getElementById('root');
const tag = <strong>Olá React!!!</strong>

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
  </div>, 
  el
)