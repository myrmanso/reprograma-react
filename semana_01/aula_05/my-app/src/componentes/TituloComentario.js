import React from 'react'
import '../App.css'

const TituloComentario = (props) => {
    return (
        <div>
            <h2 className="comentario__nome">{props.nome}</h2>
            <h3 className="comentario__subtitulo">{props.subtitulo}</h3>
        </div>
    )
}

export default TituloComentario