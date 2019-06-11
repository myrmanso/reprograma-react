import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';

//COLAR A BAIXO OS EXERCICIOS:

class Componente extends React.Component {
    render() {
        return (
            <div className="comentario">
                
                <img className="comentario__perfil" src={this.props.url}/>
                
                <div>
                    <h1 className="comentario__nome">{this.props.nome}</h1>
                    <h3 className="comentario__subtitulo">{this.props.titulo}</h3>
                    <hr />
                    <p >{this.props.comentario}</p>
                </div>
            </div>
        )
    }
}


class App extends React.Component{
    render(){
        return (
            <div>
                < Componente 
                nome = "Joana"
                titulo = "Achei bem ruim"
                comentario = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, enim? Culpa distinctio sint quidem suscipit libero. Repellendus tempora, vel fuga quisquam dolore incidunt commodi qui corporis similique iste enim beatae."
                url = "https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
