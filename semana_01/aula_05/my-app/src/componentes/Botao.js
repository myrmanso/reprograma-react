import React from 'react'
import '../App.css'


class Botao extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            font: 16
        }    
    }

    
    addUm =() =>{
        this.setState((estadoAnterior) => { return  estadoAnterior.font ++})
        
    }

    menosUm =() =>{
        this.setState((estadoAnterior) => {return  estadoAnterior.font -- })
        
    }

    render(){
    document.querySelector('body').style.fontSize = `${this.state.font}px`
    return(
        <div className="btnGroup">
            <button onClick={this.addUm} className="btnComentario btnFontSize">+1</button>
            <button onClick={this.menosUm} className="btnComentario btnFontSize">-1</button>
        </div>
    )
}
}

export default  Botao