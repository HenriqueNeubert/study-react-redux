import React from 'react'

export default function ComParam(props){
    console.log(props);
    return(
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <h4>{props.numero}</h4>
        </div>
    )
}