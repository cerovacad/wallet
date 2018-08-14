import { createStore, combineReducers, applyMiddleware } from "redux";
import transactionReducer from "../reducers/transactionReducer";
import {createLogger} from 'redux-logger';
const logger = createLogger();
export default () => {
    const store = createStore(
        combineReducers({
            transactions: transactionReducer
        }), applyMiddleware(logger)
    );
    return store;
};


