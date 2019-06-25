import React, { Component } from 'react'
import './cabecalho.css'
// import './navMenu.css'

class Cabecalho extends Component {
    render() {
        return (
            <header className="cabecalho">
                <div className="cabecalho__container container">
                    <h1 className="cabecalho__logo">
                        <a href="/">Twitelum</a>
                    </h1>
                    { this.props.children }
                </div>
            </header>
        )
    }
}

export default Cabecalho