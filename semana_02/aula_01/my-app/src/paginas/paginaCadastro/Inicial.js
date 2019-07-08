import React from 'react'
import Astronauta from '../../imagens/astronaut.png'
import Globo from '../../imagens/globe.png'
import BotaoInicial from '../../componentes/cadastro/BotoesCadastroInicial'

const Inicial = (props) => {
    return (
        <div className="pagina">
            <h1>Escolha qualtipo de cadastro</h1>
            <div className="pagina__botao">
                <BotaoInicial 
                srcImagem = {Astronauta}
                altImagem = 'icone astronauta'
                titulo = "Pessoa Física"
                valorImagem = "PF"
                acaoBotao={props.alteraConteudo}
                />
                <BotaoInicial 
                srcImagem = {Globo}
                altImagem = 'icone globo terrestre'
                titulo = "Pessoa Jurídica"
                valorImagem = "PJ"
                acaoBotao={props.alteraConteudo}
                />
            </div>
        </div>
    )
} 

export default Inicial