import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basics/First'

const title = <h1>Olá!!!</h1>
ReactDOM.render(
    <div>
        <Primeiro/>
        { title }
    </div>
    , 
    document.getElementById('root')
)