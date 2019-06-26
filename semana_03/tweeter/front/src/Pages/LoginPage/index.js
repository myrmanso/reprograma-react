import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'

import './loginPage.css'

class LoginPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            erro : false,
            messageErro: ''
        }
    }



    fazerLogin = (e) => {
        e.preventDefault()
        console.log(this.inputLogin.value)
        console.log(this.inputSenha.value)
        const dadosDeLogin = {
            login: this.inputLogin.value,
            senha: this.inputSenha.value
        }
        fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify(dadosDeLogin),
        })
        .then(resp => {
            //ele vai pegar somente essa resposta e damos um .json() para retornar somente o response
            if(!resp.ok)
                throw resp;
            return resp.json()
        })
        .then( respJson => {
            console.log('then ok', respJson)
            localStorage.setItem('TOKEN', respJson.token)
            this.props.history.push('/')//Uma função do router que vai receber por props. dentro do push você coloca o local da rota que você quer 
        })
        .catch((err) => {
            err.json()
            .then ( (res) => {
                // this.erro = res.message
                this.setState({
                    erro : true,
                    messageErro : res.message
                })
            })
        })
    }

    render() {

        return (
            <Fragment>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage__title">Seja bem vindo!</h2>
                            <form className="loginPage__form" action="/" onSubmit={this.fazerLogin}>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="login">Login</label> 
                                    <input 
                                    ref = {(elementoLogin) => this.inputLogin = elementoLogin}
                                    className="loginPage__input" 
                                    type="text" 
                                    id="login" 
                                    name="login"
                                    />
                                </div>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                    <input 
                                    ref = {(elementoSenha) => this.inputSenha = elementoSenha}
                                    className="loginPage__input" 
                                    type="password" 
                                    id="senha" 
                                    name="senha"
                                    />
                                </div>
                               {this.state.erro && < div className="loginPage__errorBox">
                                    {this.state.messageErro}
                                </div>}
                                <div className="loginPage__inputWrap">
                                    <button className="loginPage__btnLogin" type="submit">
                                        Logar
                                    </button>
                                </div>
                            </form>
                        </Widget>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default LoginPage