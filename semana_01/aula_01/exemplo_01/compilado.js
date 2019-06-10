"use strict";

console.log('app carregado');
var app = document.querySelector('#app');
var a = 'segunda-feira'; //const templade = ` <h1>React na Reprograma, na ${a}</h1>`

var templade = React.createElement("h1", null, "DEU CERTO PORRA!!!! Caralho"); //rendeer(oquevcquerenderizar, onde vc quer renderizar)
//render(elemento,container)

ReactDOM.render(templade, app);
