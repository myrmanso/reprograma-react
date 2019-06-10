console.log('app carregado')
const app = document.querySelector('#app')
const a = 'segunda-feira'

//const templade = ` <h1>React na Reprograma, na ${a}</h1>`

var templade = <h1>DEU CERTO PORRA!!!! Caralho</h1>

//rendeer(oquevcquerenderizar, onde vc quer renderizar)
//render(elemento,container)
ReactDOM.render(templade, app)