import { createStore, combineReducers } from "redux";
import transactionReducer from "../reducers/transactionReducer";

export default () => {
    const store = createStore(
        combineReducers({
            transactions: transactionReducer
        }),
    );
    return store;
};


