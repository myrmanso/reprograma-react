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
