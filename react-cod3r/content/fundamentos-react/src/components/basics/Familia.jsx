import React, { cloneElement } from 'react'
import FamiliaMembro from './FamiliaMembro'

export default (props) => {
    return (
        <div>
            {
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
            {/* {cloneElement(props.children, {...props})} */}
            {/* <FamiliaMembro nome="pedro" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="ana" {...props}></FamiliaMembro>
            <FamiliaMembro nome="joao" sobrenome="doria"></FamiliaMembro> */}
        </div>
    )
}