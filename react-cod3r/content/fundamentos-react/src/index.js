import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import ComParam from './components/basics/Comparam'

ReactDOM.render(
    <React.Fragment>
        <First/>
        <ComParam 
            titulo="Teste titulo!!!" 
            subtitulo="teste subtitulo"
            numero={49}
        />
    </React.Fragment>
    , 
    document.getElementById('root')
)