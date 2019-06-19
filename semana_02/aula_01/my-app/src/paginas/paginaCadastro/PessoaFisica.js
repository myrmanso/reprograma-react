import React from 'react'
import Grupo from '../../componentes/cadastro/formulario/Grupo'
import BotaoSubmit from '../../componentes/cadastro/formulario/BotaoSubmit'


class PessoaFisica extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            nomeSobrenome: {
                valor: '',
                erro: ''
            },
            numeroDoCpf: {
                valor: '',
                erro: ''
            },
            dataDeNascimento: {
                valor: '',
                erro: ''
            },
            email: {
                valor: '',
                erro: ''
            },
            senha:{
                valor: '',
                erro: ''
            },
        }
    }

    handleSubmit = e => {
        this.props.alteraConteudo(this.props.conteudo)
        e.preventDefault()
    }

    handleChange = (nomeDoInput, valorDoInput, erro = '') => {

        this.setState({
            [nomeDoInput] : {
                valor: valorDoInput,
                erro: erro
            }
        })
    }


    estaDesabilitado = () => {
        const {nomeSobrenome, numeroDoCpf, dataDeNascimento, email, senha} = this.state

        if(!nomeSobrenome.valor|| nomeSobrenome.erro || !numeroDoCpf.valor || numeroDoCpf.erro || !dataDeNascimento.valor || dataDeNascimento.erro || !email.valor || email.erro || !senha.valor || senha.erro){
            return true
        }else{
            return false
        }
    }

    render(){
        const desabilitado = this.estaDesabilitado()
        const {nomeSobrenome, numeroDoCpf, dataDeNascimento, email, senha} = this.state

        return(
            <div className="pagina">
                <h2>Pessoa Física</h2>
                <form className="formulario" onSubmit={this.handleSubmit}>
                    <div>
                        <Grupo erro={nomeSobrenome.erro}>
                            <Grupo.Legenda
                                htmlForLegenda="nomeSobrenome">
                                Nome Completo:
                            </Grupo.Legenda>
                            <Grupo.CaixaTexto
                                required={true}
                                type="text" 
                                className="campo" 
                                id="nomeSobrenome" 

                                placeholder="Nome" 
                                value={nomeSobrenome.valor} 
                                name="nomeSobrenome" 
                                onChange={this.handleChange} 
                            />
                        </Grupo>
                    </div>
                    <div>
                        <Grupo erro={numeroDoCpf.erro}>
                            <Grupo.Legenda
                                htmlForLegenda="numeroDoCpf">
                                CPF:
                            </Grupo.Legenda>
                            <Grupo.CaixaTexto
                                required={true}
                                type="text" 
                                className="campo" 
                                id="numeroDoCpf"
                                placeholder="000.000.000-00" 
                                value={numeroDoCpf.valor} 
                                name="numeroDoCpf" 
                                onChange={this.handleChange} 
                            />
                        </ Grupo>
                    </div>
                    <div>
                        <Grupo erro={dataDeNascimento.erro}>
                            <Grupo.Legenda
                                htmlForLegenda="dataDeNascimento">
                                Data de nascimento:
                            </Grupo.Legenda>
                            <Grupo.CaixaTexto
                                required={true}
                                className="campo" 
                                type="text" 
                                id="dataDeNascimento"
                                placeholder="dd/mm/aaaa" 
                                value={dataDeNascimento.valor} 
                                name="dataDeNascimento" 
                                onChange={this.handleChange} 
                            />
                        </ Grupo>
                    </div>
                    <div>
                        <Grupo erro={email.erro}>
                            <Grupo.Legenda
                                htmlForLegenda="email">
                                Email:
                            </Grupo.Legenda>
                            <Grupo.CaixaTexto
                                required={true}
                                className="campo" 
                                type="email" 
                                id="email"
                                placeholder="email@email.com" 
                                value={email.valor} 
                                name="email" 
                                onChange={this.handleChange}  
                            />
                        </Grupo>
                    </div>
                    <div>
                        <Grupo erro={senha.erro}>
                            <Grupo.Legenda
                                htmlForLegenda="senha">
                                senha:
                            </Grupo.Legenda>
                            <Grupo.CaixaTexto
                                required={true}
                                className="campo" 
                                type="password" 
                                id="senha"
                                placeholder="Senha" 
                                value={senha.valor} 
                                name="senha" 
                                onChange={this.handleChange}  
                            />
                        </Grupo>
                        <BotaoSubmit  desabilitado = {desabilitado} acaoBotaoSubmit ={this.handleSubmit} className="botao">
                            Enviar
                        </BotaoSubmit>
                    </div>
                </form>

            </div>
        )
    }
}

export default PessoaFisica