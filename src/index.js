import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import "@blueprintjs/core/lib/css/blueprint.css";
import "normalize.css/normalize.css";
import styles from "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";

const App = () => {
    return ( <
        AppRouter / >
    );
};


ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();