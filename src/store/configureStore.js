import { createStore, combineReducers, applyMiddleware } from "redux";
import transactionReducer from "../reducers/transactionReducer";
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
const logger = createLogger();

export default () => {
    const store = createStore(
        combineReducers({
            transactions: transactionReducer,
            auth: authReducer
        }), applyMiddleware(thunk, logger)
    );
    return store;
};


