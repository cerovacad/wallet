// INITIAL STATE
// type: 'incoming',
// title: 'Website changes',
// description: 'requesting',
// user: 'example@gmail.com',
// status: 'in-progress',
// balance: 0.008,
// longDescription: 'Simply dummy text of the printing anddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'

import { ADD_TRANSACTION, REMOVE_TRANSACTION } from '../actions/transactionActions';

const defState = [];

export default (state = defState, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return state;
        case REMOVE_TRANSACTION:
            return state;
        default:
            return state;
    }
}