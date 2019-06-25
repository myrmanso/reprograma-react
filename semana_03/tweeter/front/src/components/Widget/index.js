import React, { Component } from 'react'
import './widget.css'

class Widget extends Component {
    render() {
        return (
            <div className="widget">
                { this.props.children }
            </div>
        )
    }
}

export default Widget