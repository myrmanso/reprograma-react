# Semana 03 - React

## Refs 
_**ref**_ é um atributo da tag _input_ que manipula diretamente o DOM.

Refs são criadas usando React.createRef() e anexadas aos elementos React por meio do atributo ref.

Existem algumas boas finalidades para o uso de refs:

* Gerenciamento de foco, seleção de texto, ou reprodução de mídia.
* Engatilhar animações imperativas.
* Integração com bibliotecas DOM de terceiros.
* Para pegar o _value_ do input quando ele é imutável.

Ex.:


No código abaixo assim que o usuário clicar no botão _Value_ irá mostrar no console o valor do input.

```js

import "./styles.css";

function App() {
  let input = React.createRef();
  return (
    <div className="App">
      <input
        ref={e => {
          console.log(input)
          input = e;
        }}
      />
      <button onClick={() => console.log(input.value)}> Value </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```
[Código criado no CodeSandbox](https://codesandbox.io)

[Caso queira visualisar no browser é só clicar aqui e inspecionar no console](https://ix3j0.csb.dev/)


## API - Fetch


Passar um obj para JSON
```js

const dadosDeLogin = {
    login: this.inputLogin.value,
    senha: this.inputSenha.value
}

let jsonOBJ = JSON.stringify(dadosDeLogin)



//Passar um JSON para obj


JSON.paerse(jsonOBJ)

```


## [Spread operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)


Passa propriedade por propriedade de um objeto e por cada item de um array e "pega" as propriedades/os itens.

```js
const obj = { name: Mayara, idade: 25}
const obj1 = {...obj} //{name: Mayara, idade: 25}



let partes = ['ombros', 'joelhos'];
let letra = ['cabeca', ...partes, 'e', 'dedos']; // ["cabeca", "ombros", "joelhos", "e", "dedos"]

```