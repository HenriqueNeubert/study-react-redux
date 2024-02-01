import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default (props) => {
    return (
        <div>
            <FamiliaMembro nome="pedro" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="ana" {...props}></FamiliaMembro>
            <FamiliaMembro nome="joao" sobrenome="doria"></FamiliaMembro>
        </div>
    )
}