import React from 'react'
import '../App.css'


const ImgComentario = (props) => {
    return (
        
        <img className="comentario__perfil" src={props.imagem} />
    )
}

export default ImgComentario