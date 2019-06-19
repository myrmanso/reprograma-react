import React, {Component} from 'react'
import Comentario from '../componentes/chat/Comentario'
import {getComentarios} from '../service/base'
import './chat.css'

class Chat extends Component{
    constructor(props){
        super(props)

        this.state = {
            comentarios : new Array()
        }
    }

    componentDidMount(){
        getComentarios()
        .then(response => {
            console.log(response)
            this.setState({comentarios : response.data})
        })
        .catch (error => {
            console.log(error)
        })
    }

    render(){
        const { comentarios} = this.state
        return (
            <div className = 'chat'>
                {
                    comentarios.length > 0 ? comentarios.map((item, index) => {return <Comentario comentario = {item} key = {index + 'comentario'}/>}) : <span>Carregando comentários</span>
                }
            </div>
        )
    }
}

export default Chat