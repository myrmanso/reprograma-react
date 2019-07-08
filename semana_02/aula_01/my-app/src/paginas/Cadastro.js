import React from 'react'
import Inicial from './paginaCadastro/Inicial'
import PessoaFisica from './paginaCadastro/PessoaFisica'
import PessoaJuridica from './paginaCadastro/PessoaJuridica'
import Final from './paginaCadastro/Final'
import './cadastro.css'



class Cadastro extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            conteudo : undefined,
        }
    }

    trocarConteudo = (valorDoMeuConteudo) => {
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
                {this.state.conteudo === undefined && <Inicial alteraConteudo = {this.trocarConteudo}/>} 
                {this.state.conteudo === "PF" && <PessoaFisica conteudo="final" alteraConteudo = {this.trocarConteudo}/>}  
                {this.state.conteudo === "PJ" && <PessoaJuridica />}  
                {this.state.conteudo === "final" && <Final/>} 
            </div>
        )
    }
} 


export default Cadastro