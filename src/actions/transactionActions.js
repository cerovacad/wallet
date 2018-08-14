import uid from 'uid'
export const ADD_TRANSACTION = 'ADD_TRANSACTION',
    REMOVE_TRANSACTION = 'REMOVE_TRANSACTION'


// INITIAL STATE
// type: 'incoming',
// title: 'Website changes',
// description: 'requesting',
// user: 'example@gmail.com',
// status: 'in-progress',
// balance: 0.008,
// longDescription: 'Simply dummy text of the printing anddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'

export const addTransaction = ({
    type = '',
    title = '',
    description = '',
    user = '',
    status = '',
    balance = 0,
    longDescription = '',
    deadline = "",
    fileList = []
} = {}) => ({
    type: ADD_TRANSACTION,
    transaction: {
        id: uid(),
        type,
        title,
        description,
        user,
        status,
        balance,
        longDescription,
        deadline,
        fileList
    }

});

export const removeTransaction = ({ id } = {}) => ({
    type: REMOVE_TRANSACTION,
    id
});

