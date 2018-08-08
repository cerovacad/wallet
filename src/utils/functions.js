export const statusToText = (status) => {
    return (status[0].toUpperCase() + status.slice(1,)).replace(/-/g, " ")
}

export const descriptionToText = (description) => {
    switch(description){
        case 'sending':
            return 'You are sending funds to'
        case 'requesting':
            return 'You requested funds from'
        case 'is-sending':
            return 'is sending funds to you'
        case 'is-requesting':
            return 'is requesting funds'
        default:
            return description
    }
}

export const typeToText = (type) => {
    if(type === 'outgoing'){
        return "Outgoing transaction"
    }else{
        return "Incoming transaction"
    }
}