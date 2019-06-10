import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let contadorNum = 0;
const nome = {
    primeiroNome:  "Jessica",
    sobreNome: "Lopes",
}

function nomecompleto(nome){
    return nome.primeiroNome + ' ' +  nome.sobreNome;
}

const template =
                <div>
                    <h1>Count: {contadorNum}</h1>
                    <h2>Oi, {nomecompleto(nome)}</h2>
                    <button>+1</button><button>-1</button><button type="reset">reset</button>
                </div>

ReactDOM.render(template, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
