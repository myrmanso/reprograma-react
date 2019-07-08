import React from 'react'

const BotaoSubmit = (props) => {
    // let classes = props.className
    // if(props.desabilitado){
    //     classes += ' botao--desabilitado'
    // }

    let classes = props.desabilitado ? (props.className + ' botao--desabilitado') : props.className
    return(
        <button className={classes} onClick={props.acaoBotaoSubmit}>
            {props.children}
        </button>
    )
}

export default BotaoSubmit