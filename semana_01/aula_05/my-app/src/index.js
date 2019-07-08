import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import './previsaoTempo.css';
import Previsao from './componentes/Previsao'
import Comentarios from './componentes/Comentarios'
import Botao from './componentes/Botao'
import Data from './componentes/DataArray'
import * as serviceWorker from './serviceWorker';

//COLAR A BAIXO O EXERCÍCIO DESEJADO
class App extends React.Component{

    render(){
        
        return(
            <div>
            <div className= "previsao-container">
                {
                    this.props.temp.map((index) => {
                        return(
                            <Previsao 
                            data = {index.data}
                            resumo = {index.resumo}
                            imagem = {index.imagem}
                            temperatura = {index.temperatura}
                            />
                        )
                    })
                }
            </div>
            <div>
                <Botao />
            </div>
            <Comentarios />
            </div>
        )
    }
}

ReactDOM.render(<App temp={Data}  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
