import React from 'react'

const Legenda = (props) =>{
    return(
        <label htmlFor= {props.htmlForLegenda}>
            {props.children}
        </label>
    )
}

export default Legenda