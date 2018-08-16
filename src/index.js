import { init as firebaseInit } from './firebase';
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

store.dispatch(addTransaction({
    type: 'incoming',
    title: 'Website changes',
    description: 'is-sending',
    user: 'example@gmail.com',
    status: 'waiting-for-your-reply',
    balance: 0.008,
    deadline: '17 08 1024',
    longDescription: 'Simply dummy text of the printing anddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
}));
store.dispatch(addTransaction({
    type: 'incoming',
    title: 'Website changes',
    description: 'requesting',
    user: 'example@gmail.com',
    status: 'in-progress',
    balance: 0.008,
    longDescription: 'Simply dummy text of the printing anddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
}));

firebaseInit()

const App = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
};


ReactDOM.render(<App />, document.getElementById('root'));

