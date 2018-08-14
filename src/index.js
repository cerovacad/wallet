import React from 'react';
import ReactDOM from 'react-dom';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addTransaction } from './actions/transactionActions';

const store = configureStore();

store.dispatch(addTransaction({type: "bla", description: "in progress"}));
console.log(store.getState());
const App = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
