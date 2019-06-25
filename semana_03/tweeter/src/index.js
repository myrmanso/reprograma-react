import React from "react";
import ReactDOM from "react-dom";

// CSSs Globais
import "./assets/css/reset.css";
import "./assets/css/container.css";
import "./assets/css/btn.css";
import "./assets/css/icon.css";
import "./assets/css/iconHeart.css";
import "./assets/css/notificacao.css";

import "./assets/css/novoTweet.css";
// import './index.css';

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
