export const statusToText = (status) => {
    return (status[0].toUpperCase() + status.slice(1, )).replace(/-/g, " ")
}

export const descriptionToText = (description) => {
    switch (description) {
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
    if (type === 'outgoing') {
        return "Outgoing transaction"
    } else {
        return "Incoming transaction"
    }
}

export const descriptionToTextAndStyle = (description) => {
    switch (description) {
        case "requesting":
            return {
                text: "Cancel",
                className: "transaction-buttons--cancel",
                containerClassName: "transaction-buttons--bellow"
            }
        case "sending":
            return {
                text: "",
                className: "transaction-buttons--none",
                containerClassName: "transaction-buttons"

            }
        case "is-sending":
            return {
                text1: "Accept",
                text2: "Decline",
                className1: "bp3-intent-success transaction-buttons--accept",
                className2: "bp3-intent-danger transaction-buttons--decline",
                containerClassName: "transaction-buttons"
            }
        case "is-requesting":
            return {
                text: "Add funds",
                className: "bp3-intent-success transaction-buttons--addFunds",
                containerClassName: "transaction-buttons"
            }
        default:
            return "";
    }
};
export const setWalletButtonDescription = (topUp, transfer) => {
    if (topUp) {
        return "Top-up"
    } else if (transfer) {
        return "Transfer"
    };
};