import React from'react'
import {Switch, Route, Redirect} from 'react-router-dom'

// Páginas que eu vou exportar na minha rota
import Home from './Pages/Home/Home'
import LoginPages from './Pages/LoginPage' //se vc salva o arquivo como index.js eu não preciso chamar a rota com o nome do arquivo. preciso ir até a pasta pois o react sempre vai procurar por uma pasta index.js


//Função para autenticação do usuário na página
const estaAtenticado = () => localStorage.getItem('TOKEN') ? true : false


//COMPONENTE QUE VAI SUBISTUIR O <ROUTE/> PARA VERIRFICAR A LÓGICA DE AUTENTICAÇÃO. NORMALMENTE CHAMADO DE **WRAPER**
class PrivateRoute extends React.Component {

    render() {
        
        const Component = this.props.component

        if(estaAtenticado()){
            // componente rota tweet
            return (
                <Route render = {()=> <Component {...this.props}></Component>}></Route>
            )
        }
        else{
            //componente rota de login - redireciona
            return <Redirect to="/login"></Redirect>
        }
    }

}


const Roteamento = () => {
    return(
        <Switch>
            <PrivateRoute exact path="/" component = {Home} />
            <Route path = "/login" component = {LoginPages} />
        </Switch>
    )
}

export default Roteamento