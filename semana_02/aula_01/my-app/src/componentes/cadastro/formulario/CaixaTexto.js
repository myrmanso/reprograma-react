import React from 'react'


const CaixaTexto = (props) =>{

    let valida = (e) => {
        props.onChange(e.target.name, e.target.value)
    }

    return(
        <input 
            className={props.className}
            type={props.type} 
            id={props.id} 
            placeholder={props.placeholder} 
            value={props.value} 
            name={props.name}
            onChange={valida} 
        />
    )
}

export default CaixaTexto