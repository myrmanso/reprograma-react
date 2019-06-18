import React from 'react'

/* 
propsQeuOBotaoRecebe = {
    srcImagem = {Astronauta}
    altImagem = 'icone astronauta'
    titulo = "Pessoa Física"
    valorImagem = "PF"
    acaoBotao={props.alteraConteudo}
}
*/

const BotaoInicial =(props) => {
    return(
        <button className="botao-icone" onClick={() => props.acaoBotao(props.valorImagem)}>
            <img src ={props.srcImagem} alt={props.altImagem} className="botao-imagem"/>
            <span>{props.titulo}</span>
        </button>
    )
}

export default BotaoInicial