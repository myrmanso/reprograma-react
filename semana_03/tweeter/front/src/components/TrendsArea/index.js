import React, { Component } from 'react'
import './trendsArea.css'

class TrendsArea extends Component {
    render() {
        return (
            <div className="trendsArea">
                <h2 className="trendsArea__titulo widget__titulo">Trends Brasil</h2>
                <ol className="trendsArea__lista">
                    <li><a href="/">#bagulhos</a></li>
                    <li><a href="/">#bagulheiros</a></li>
                </ol>
            </div>
        )
    }
}

export default TrendsArea