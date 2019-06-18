import React from 'react'
import Inicial from './paginaCadastro/Inicial'
import PessoaFisica from './paginaCadastro/PessoaFisica'
import PessoaJuridica from './paginaCadastro/PessoaJuridica'
import './cadastro.css'



class Cadastro extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            conteudo : undefined,
        }
    }

    trocarContaudo = (valorDoMeuConteudo) => {
        this.setState({conteudo: valorDoMeuConteudo}) //forma reduzida
        /* 
        this.setState((valorDoMeuConteudo) => {
            return{
                conteudo: valorDoMeuConteudo
            }
        })
        */
    }
    
    render (){
        return(
            <div className="cadastro">                
                {this.state.conteudo === undefined && <Inicial alteraConteudo = {this.trocarContaudo}/>} 
                {this.state.conteudo === "PF" && <PessoaFisica />}  
                {this.state.conteudo === "PJ" && <PessoaJuridica />}   
            </div>
        )
    }
} 


export default Cadastro