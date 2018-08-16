import { init as firebaseInit } from './firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import firebase from 'firebase/app';
import AppRouter, { history } from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addTransaction } from './actions/transactionActions';
import { loginAsync, logout } from './actions/authActions';

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

// let hasRendered = false;
// const renderApp = () => {
//     if (!hasRendered) {
//         ReactDOM.render(<App />, document.getElementById('root'));
//         hasRendered = true;
//     }
// };

ReactDOM.render(<App />, document.getElementById('root'));

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
        
//         renderApp();
//         if (history.location.pathname === '/') {
//             history.push('/');
//         }
        
//         // store.dispatch(loginAsync(user.getIdToken()))
//         //     .then(() => {
               
//         //     });
//     } else {
//         // store.dispatch(logout());
//         renderApp();
//         history.push('/');
//     }
// });
