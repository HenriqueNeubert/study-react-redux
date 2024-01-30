import React from 'react'

export default function ComParam(props){
    const status = props.numero >= 50 ? "> 50 " : "< 50"
    return(
        <React.Fragment>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <h4>{props.numero}</h4>
            <h5>{status}</h5>
        </React.Fragment>
    )
}