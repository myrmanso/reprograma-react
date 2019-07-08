import React from 'react'
import Comentario from './Comentario'
import arrayComentario from './ComentarioArray';


class Comentarios extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mostrar: true
        }    
    }
    
    esconder = () => {
        this.setState((estadoAnterior) => {
          return {
            mostrar: !estadoAnterior.mostrar
          }
        })
    }

    render(){
        return(
            <div>
            <button className = "btnComentario" onClick={this.esconder}>Mostrar</button>

            {this.state.mostrar && arrayComentario.map((index) => {
                    return(
                    <Comentario
                        imagem={index.autora.imagem}
                        nome={index.autora.nome}
                        subtitulo={index.subtitulo}
                        comentario={index.texto}
                    />
                    )})
            }
            </div>
        )
    }
}

export default Comentarios
