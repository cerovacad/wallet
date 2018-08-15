import uid from 'uid'
export const ADD_TRANSACTION = 'ADD_TRANSACTION',
    REMOVE_TRANSACTION = 'REMOVE_TRANSACTION'

export const addTransaction = ({
    type = 'incoming',
    title = 'Default',
    description = 'sending',
    user = 'user@mail.com',
    status = 'waiting-for-escrow',
    balance = 0.009,
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

export const removeTransaction = ({
    id
} = {}) => ({
    type: REMOVE_TRANSACTION,
    id
});

