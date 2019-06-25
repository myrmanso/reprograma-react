import React from'react'
import {Switch, Route} from 'react-router-dom'

// Páginas que eu vou exportar na minha rota
import Home from './Pages/Home/Home'
import LoginPages from './Pages/LoginPage' //se vc salva o arquivo como index.js eu não preciso chamar a rota com o nome do arquivo. preciso ir até a pasta pois o react sempre vai procurar por uma pasta index.js

const Roteamento = () => {
    return(
        <Switch>
            <Route exact path="/" component = {Home} />
            <Route path = "/login" component = {LoginPages} />
        </Switch>
    )
}

export default Roteamento