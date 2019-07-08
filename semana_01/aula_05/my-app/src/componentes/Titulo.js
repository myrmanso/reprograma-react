import React from 'react';

let Titulo = (props) => {
    return (
        <div>
            <h1 className="previsao__data">{props.data}</h1>
            <h2 className="previsao__resumo">{props.resumo}</h2>
        </div>
    )
}

export default Titulo;