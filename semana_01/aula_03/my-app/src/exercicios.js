import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';

let cont = 0;

class Contador extends React.Component{
    addUm = () => {
        cont++
        console.log(cont)
        ReactDOM.render(<Contador />, document.getElementById('root'));
    }
    subtraiUm = () => {
        cont--
        console.log(cont)
        ReactDOM.render(<Contador />, document.getElementById('root'));
    }
    reset = () => {
        cont = 0
        ReactDOM.render(<Contador />, document.getElementById('root'));
    }
    render (){
        return(
            <div>
                
                <h2>Count: {cont}</h2>
                <button onClick={this.addUm}>+1</button>
                <button onClick={this.subtraiUm}>-1</button>
                <button onClick={this.reset}>Reset</button>

            </div>
        )
    }
}

ReactDOM.render(<Contador />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
