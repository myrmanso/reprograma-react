import React from 'react'
import '../App.css'
import ImgComentario from './ImgComentario'
import TituloComentario from './TituloComentario'
import Paragrafo from './Paragrafo'


class Comentario extends React.Component {
  render() {

    return (
      
      <div className="comentario">

        < ImgComentario 
        imagem = {this.props.imagem}
        />
          <div>
            < TituloComentario 
            nome = {this.props.nome}
            subtitulo = {this.props.subtitulo}
            />
            <hr />
            < Paragrafo 
            comentario = {this.props.comentario}
            />
          </div>
        </div>
    )
  }
}

export default Comentario