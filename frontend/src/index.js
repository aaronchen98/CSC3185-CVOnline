import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './css/pages.css';
import './css/enter.css';
import"antd/dist/antd.css" ;
import App from './App';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();