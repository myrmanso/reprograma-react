# [AULA 01](https://github.com/myrmanso/reprograma-react/tree/master/semana_02/aula_01/my-app)


## REACT ROUTER

* dependencia externa 
* biblioteca externa ao react que vai criar para nós as rotas da apliacação
* CRIA ROTAS DENTRO DO REACT
* [REACT TRAINING](https://reacttraining.com/react-router/web/guides/quick-start) : documentação da biblioteca do react routing


_para instalar:_

```
npm install react-router-dom --save
```


### Utilizando o Router

para utilizar ele é necessário importar ele na página "mãe"

```javascript
import {Switch, Route} from 'react-router-dom'

/* Para chamar um componente e ele ser renderizado é necessário chamar assim: 
as rotas são chamadas como parâmetros 'components={parametro}'
*/
	<Switch>
		<Route path="/"  exact component={Home} /> //Quando for a página index é preciso colocar 'exact' que é exatamente aquele texto
		<Route path="/pagina2"   component={Página2} /> //Para as demais páginas 
	</Switch>

/* No index.js ele será importado dessa maneira */
import {BrowserRouter as Router} from 'react-router-dom';
```


* Para linkarmos as rotas 
importamos ele no arquivo e passamos ele como JSX dando props para ele (to="") e children (filho dentro das tags)
```javascript
import { Link } from 'react-router-dom'

<Link to="/" className="navbar-links__ativo">Home-children</Link>
```

* Para renderizar a tua página com as rotas é necessário inserir um JSX chamando o Router e colocando teu componente Principal a ser renderizado

```javascript 

import {BrowserRouter as Router} from 'react-router-dom';



ReactDOM.render(
    (
        <Router>
            <App />
        </Router>
   ), document.getElementById('root'));
```


## Bibliotecas de estilo do React

* [Material Ui](https://material-ui.com/pt/)
	* [Instalação](https://www.npmjs.com/package/@material-ui/core)

* [Ant Desing](https://ant.design/)
	* [intalação](https://ant.design/docs/react/introduce) 

* [React bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)

# AULA 02

## [Formulário](https://pt-br.reactjs.org/docs/forms.html#___gatsby)


```html
<form>
  <label>
    Nome:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Enviar" />
</form>
```
Esse formulário tem o comportamento padrão do HTML de navegar para uma nova página quando o usuário enviar o formulário. Se você quer esse comportamento no React, ele simplesmente funciona. Mas na maioria dos casos, é conveniente ter uma função Javascript que manipula o envio de um formulário e tem acesso aos dados que o usuário digitou nos inputs. O modo padrão de fazer isso é com uma técnica chamada [“componentes controlados”](https://pt-br.reactjs.org/docs/forms.html#controlled-components) (controlled components).

```javascript

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

```

```js

handleChange = (nomeDoInput, valorDoInput, erro = '') => {
        console.log(e.target)
        
        const nomeDoInput = e.target.name //ele vai pegar o name do input
        this.setState({
            [nomeDoInput] : e.target.value, //aqui ele vai setar o this.state.valor para o nome do input, dessa forma se o nome do input for nomeSobrenome o this.state.nomeSobrenome : e.target.value
        })
    }

```

<hr>

## [Padrões em React: Criando Componentes](https://medium.com/@oieduardorabelo/padr%C3%B5es-em-react-criando-componentes-d35422034d75)


## [AXIOS](https://www.npmjs.com/package/axios)
faz requisições para api 

