# Semana 01  React -- FUNÇÕES, ESCOPO, ESTADO

_Para clonar esse repositório usar o comando_

```
cd my-app
npm install 
npm start

```

_colar o exercicio desejado no **index.js**_

## Funções

* As funções que eu declaro serão utilizadas somente dentro daquele escopo.
* Dentro de classes as arrows functions não precisam ser declaradas como uma variável como antes. 
* É necessário que eu declare as funções dentro do escopo que eu quero trabalhar e indique em qual elemento ela será renderizada e onde ele será renderizada
* Quando eu for declarar a função dentro do elemento JSX eu preciso colocar desta forma: {this.nomeDaFuncao}. O 'this' indica que ela foi declarada dentro daquele escopo.
* *Dentro de uma classe quando eu não declaro 'this' a classe procura o elemento dentro do escopo globa e não local.*


```javascript

// *JS*
const helloWorld = () => {
    return 'Hello World'
}


// *React - dentro de Classes*


class Contador extends React.Component{
helloworld = () => {
    console.log("Hello World")
}
render(){
    return (
        <div>
            <button onClick={this.helloWorld}>Olá</button>
        </div>
    )
}

```


#### Exercício 01
Fazer um contador utilizando classes e funções

```javascript

let cont = 0;

class Contador extends React.Component{
    addUm = () => {
        cont++
        console.log(cont)
    }
    subtraiUm = () => {
        cont--
        console.log(cont)
    }
    reset = () => {
        cont = 0
        console.log(cont)
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

```

#### Exercício 02
_Você pode ver também essa resolução no diretório exrcicio-temperatura/src/index.js_

Fazer dois cards mostrando a temperatura do dia usando obj declarados no escopo global

```javascript

const previsao31_05 = {
    data: '31/05/2019',
    resumo: 'Ensolarado',
    imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
    temperatura: {
        max: 31,
        min: 20
    }
}
   
const previsao01_06 = {
    data: '01/06/2019',
    resumo: 'Nublado',
    imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
    temperatura: {
        max: 25,
        min: 18
    }
}

function Componente (props){
    return(
        
        <div className="previsao">
            <h1 className="previsao__data">{props.data}</h1>
            <h2 className="previsao__resumo">{props.resumo}</h2>
            <img className="previsao__img" src= {props.imagem} />
            <table className="previsao-temperatura">
                <tr className="previsao-temperatura__linha">
                    <th>Máxima</th>
                    <td>{props.temperatura.max}</td>
                </tr>
                <tr className="previsao-temperatura__linha">
                <th>Mínima</th>
                <td>{props.temperatura.min}</td>
                </tr>
            </table>
        </div>
       
    )
}

function Temperatura (props){
    return(
        <div className= "previsao-container">
            <Componente 
            data = {previsao31_05.data}
            resumo = {previsao31_05.resumo}
            imagem = {previsao31_05.imagem}
            temperatura = {previsao31_05.temperatura}
            />
            <Componente 
            data = {previsao01_06.data}
            resumo = {previsao01_06.resumo}
            imagem = {previsao01_06.imagem}
            temperatura = {previsao01_06.temperatura}
            />

        </div>
    )
}

ReactDOM.render(<Temperatura />, document.getElementById('root'));

```

<hr />

## Escopo 

Eu consigo passar 'props' de um componente para outro desde que ele seja um filho
meu, ou seja, desde que o outro componente esteja dentro do meu escopo.

* Utilizamos 'this' na classe para que ela pegue a 'props' somente daquele escopo, pois se não tiver a classe irá procurar no escopo global

Exemplo:
![exemplo de escopo no react](./escopo.jpg)



```javascript

const Titulo = (props) => {
    return (
        <div>
            <h1>{props.nome}</h1>
            <p>{props.resumo}</p>
        </div>
    )
}

class Previsao extend React.Component{
    render() {
        return(
            <div>
                <Titulo
                nome = {this.props.nome}
                resumo = {this.props.resumo}
                />
                <p>{this.props.texto}</p>
            </div>
        )
    }
}

class Container extend React.Component{
    render(){
        return(
            <Previsao 
            nome = 'Eu sou o nome do componente Titulo'
            resumo = 'herdei essa prop da minha mãe Previsao'
            texto = 'Eu sou a mãe Previsão e passei as minhas props nome e resumo para a minha filha Titulo. Eu estou dentro do escopo Container.'
            />
        )
    }
}

ReactDOM.render(<Container />, document.getElementById('root'));

```

#### Exercício 03
Pegar o [exercío 02](https://github.com/myrmanso/reprograma-react/tree/master/semana_01/aula_03####Exercício02) e dividir as partes JSX em componentes funcionais e chamar em outro Compoonente.


```javascript


const previsao31_05 = {
    data: '31/05/2019',
    resumo: 'Ensolarado',
    imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
    temperatura: {
        max: 31,
        min: 20
    }
}
   
const previsao01_06 = {
    data: '01/06/2019',
    resumo: 'Nublado',
    imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
    temperatura: {
        max: 25,
        min: 18
    }
}

let Titulo = (props) => {
    return (
        <div>
            <h1 className="previsao__data">{props.data}</h1>
            <h2 className="previsao__resumo">{props.resumo}</h2>
        </div>
    )
}

let Imagem = (props) => {
    return(
        <img className="previsao__img" src= {props.imagem} />       
    )
}

let Tabela = (props) => {
    return(
        
        <table className="previsao-temperatura">
            <tr className="previsao-temperatura__linha">
                <th>Máxima</th>
                <td>{props.temperatura.max}</td>
            </tr>
            <tr className="previsao-temperatura__linha">
            <th>Mínima</th>
            <td>{props.temperatura.min}</td>
            </tr>
        </table>
        
    )
}

function Componente (props){
    return(
        
        <div className="previsao">
            < Titulo 
            data = {props.data}
            resumo = {props.resumo}
            />
            <Imagem 
            imagem = {props.imagem}
            />
            <Tabela 
            temperatura = {props.temperatura}
            />
            
        </div>
       
    )
}

function Temperatura (props){
    return(
        <div className= "previsao-container">
            <Componente 
            data = {previsao31_05.data}
            resumo = {previsao31_05.resumo}
            imagem = {previsao31_05.imagem}
            temperatura = {previsao31_05.temperatura}
            />
            <Componente 
            data = {previsao01_06.data}
            resumo = {previsao01_06.resumo}
            imagem = {previsao01_06.imagem}
            temperatura = {previsao01_06.temperatura}
            />

        </div>
    )
}

ReactDOM.render(<Temperatura />, document.getElementById('root'));

```

<hr />

## Estados

* Só o \ReactDOM.render()\ faz a conexão do meu código js para a tela, porém toda vez que ele é chamado a tela renderiza (atualiza)

* Para que isso não ocorra o React possui uma método que redenriza apenas aquele elemento chamado constructor() que possuí uma propriedade state.

```javascript

let cont = 0;

class Contador extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                cont: 0
            }
        
        this.addUm = this.addUm.bind(this)
        this.reset = this.reset.bind(this)

    }
    

    addUm =() =>{
        this.setState((estadoAnterior) => {
            return {
                cont: estadoAnterior.cont + 1
            }
        })
        
    }

    reset =() =>{
        this.setState(() => {
            return {
                cont: 0
            }
        }) 
    }

    render(){
        return(
            <div>
                
                <h2>Count: {this.state.cont}</h2>
                <button onClick={this.addUm}>+1</button>
                <button onClick={this.reset}>Reset</button>

            </div>
        )
    }

}

ReactDOM.render(<Contador />, document.getElementById('root'));


```



