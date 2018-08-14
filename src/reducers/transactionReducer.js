// INITIAL STATE
// type: 'incoming',
// title: 'Website changes',
// description: 'requesting',
// user: 'example@gmail.com',
// status: 'in-progress',
// balance: 0.008,
// longDescription: 'Simply dummy text of the printing anddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'

import { SENDING, IS_SENDING, REQUESTING, IS_REQUESTING } from '../actions/transactionActions';

const defState = [];

export default (state = defState, action) => {
    switch(action.type){
        case SENDING:
            return state;
        case IS_SENDING:
            return state;
        case REQUESTING:
            return state;
        case IS_REQUESTING:
            return state;
        default:
            return state;
    }
}