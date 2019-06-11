# Semana 01 react - CLASSES E COMPONENTES FUNCIONAIS

## COMPONENTE NO REACT

* é uma função que tem como parâmetro um objeto que retorna elementos JSX.


### 'props' é um objeto e antes disso é um parâmetro da função
### Quando eu chamo a função dentro do render < Componente atributos="propriedades" /> o "react" lê isso como propriedades do props, pois ele é um objeto, e ele vai renderizar assim: 

``` javascript
Object{
    atributo: "propriedade",
    atributo: "propridade"
} 
```

A gente chama uma componete no render() como uma tag auto fechante. E você passa os parâmetrso dentro da tag como se fosse um atributo.

``` javascript
function Componente(props){
    console.log(props)
    return(
        <div>
            <h1>Oi, {props.apelido}</h1>
        </div>
    )
}

ReactDOM.render(< Componente apelido="Mayara" idade="25" saudacao="Oi meu amor" />, document.getElementById('root'));

```

### POSSO POR COMPONENTES DENTRO DE COMPONENTES (também)

```javascript
function Componente(props){
    return(
    <div>
        <h1>{props.saudacao}, {props.apelido}</h1>
        <p>Seu signo é {props.signo}</p>
    </div>
    )
}

function App(props){
    return (
    <div>
        < Componente 
            apelido = "Mellina"
            saudacao = "Oi meu amor"
            signo = "gemeos"
        />
        < Componente 
        apelido = "Jessika"
        saudacao = "A loka"
        signo = "gemeos"
        />
    </div>
    )
}

ReactDOM.render(< App />, document.getElementById('root'))

```

<hr/>

### EXERCÍCIO 01  

Fazer um coponente de card

```javascript
function Componente(props){
    return (
        <div className="comentario">
            
            <img className="comentario__perfil" src={props.url}/>
            
            <div>
                <h1 className="comentario__nome">{props.nome}</h1>
                <h3 className="comentario__subtitulo">{props.titulo}</h3>
                <hr />
                <p >{props.comentario}</p>
            </div>
        </div>
    )
}

function App(props){
    return (
    <div>
        < Componente 
            nome = "Mellina"
            titulo = "Amei esse vídeo kero +++"
            comentario = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, enim? Culpa distinctio sint quidem suscipit libero. Repellendus tempora, vel fuga quisquam dolore incidunt commodi qui corporis similique iste enim beatae."
            url = "https://www.bitcao.com.br/blog/wp-content/uploads/2017/06/wsi-imageoptim-vacinas-para-gatos-720x445.jpg"
        />
        < Componente 
        nome = "Joana"
        titulo = "Achei bem ruim"
        comentario = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, enim? Culpa distinctio sint quidem suscipit libero. Repellendus tempora, vel fuga quisquam dolore incidunt commodi qui corporis similique iste enim beatae."
        url = "https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg"
        />
    </div>
    )
}

ReactDOM.render(< App />, document.getElementById('root'))

```

<hr />

## CLASSES REACT

* Em JS a declaração de classe era assim:

```javascript
class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Profissional extends Pessoa{
    constructor(nome, idade, profissional){
        super(nome, idade);
        this.profissional = profissao;
    }
}

const mellina = new Pessoa('Mellina', 20);
const mellinaAdulta = new Profissional('Mellina', 27, 'dev')
```

* No React é declarado diferente 

```javascript
class Chocolate extends React.Component{
    render(){
        return (
            <h1>Reprograma - Chocolate</h1>
        )
    }
}

ReactDOM.render(<Chocolate/>, document.getElementById('root'));

```

#### EXERCÍCIO 02

Transformar o exercício 01 em classe 

Dentro da classe Componente é necessário colocar {this.props.propriedade} porque o parâmetro declarado está dentro somente desse escopo.


```javascript

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
```