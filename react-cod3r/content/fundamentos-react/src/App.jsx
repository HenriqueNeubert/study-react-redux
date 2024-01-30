import React from 'react'
import First from './components/basics/First'
import ComParam from './components/basics/Comparam'

export default props =>    
    <div id="app">
        <h1>Fundamentos React</h1>
        <First/>
        <ComParam 
            titulo="Teste titulo!!!" 
            subtitulo="teste subtitulo"
            numero={49}
        />
    </div>
    

