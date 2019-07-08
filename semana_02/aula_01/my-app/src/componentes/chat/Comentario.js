import React from 'react'
import './comentario.css'

const Comentario = (props) => {
    console.log(props)
    return (
        <div className="comentario">
            <img className="comentario__perfil" src={props.comentario.autora.imagem} alt="foto-perfil-usuario"/>
            <div>
                <h2 className="comentario__nome">{props.comentario.autora.nome}</h2>
                <h3 className="comentario__subtitulo">{props.comentario.subtitulo}</h3>
                <hr />
                <p>{props.comentario.texto}</p>
            </div>
        </div>
    )
}

export default Comentario