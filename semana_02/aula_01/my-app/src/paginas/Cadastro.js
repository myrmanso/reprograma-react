import React from 'react'
import Inicial from '../componentes/cadastro/Inicial'
import PessoaFisica from '../componentes/cadastro/PessoaFisica'
import PessoaJuridica from '../componentes/cadastro/PessoaJuridica'
import './cadastro.css'



class Cadastro extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render (){
        return(
            <div className="cadastro">
                <Inicial />
            </div>
        )
    }
} 


export default Cadastro