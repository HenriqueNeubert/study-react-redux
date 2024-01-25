import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

const title = <h1>Olá!!!</h1>
ReactDOM.render(
    <div>
        { title }
    </div>
    , 
    document.getElementById('root')
)