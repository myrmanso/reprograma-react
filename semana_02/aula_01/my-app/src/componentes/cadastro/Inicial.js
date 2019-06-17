import React from 'react'
import Astronauta from '../../imagens/astronaut.png'
import Globo from '../../imagens/globe.png'

const Inicial = (props) => {
    return (
        <div className="pagina">
            <h1>Escolha qualtipo de cadastro</h1>
            <div className="pagina__botao">
                <button className="botao-icone">
                    <img src ={Astronauta} alt='icone de astronauta' className="botao-imagem"/>
                    <span>Pessoa Física</span>
                </button>
                <button className="botao-icone">
                    <img src ={Globo} alt='icone do globo terrestre' className="botao-imagem"/>
                    <span>Pessoa Jurídica</span>
                </button>
            </div>
        </div>
    )
} 

export default Inicial