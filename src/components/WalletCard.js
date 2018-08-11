import React, { Component } from "react";
import { NumericInput, FormGroup } from "@blueprintjs/core";
import WalletButtons from "./WalletButtons";

class WalletCard extends Component {
    state = {
        amount: ""
    };
    onAmountChange = (valueAsNumber) => {
        const amount = valueAsNumber;
        this.setState(() => ({ amount }));
    };

    render() {
        return (
            <div className="wallet-prompt">
                <FormGroup
                    label="Select amount"
                    labelFor="select-amount-input"
                >
                    <NumericInput
                        allowNumericCharactersOnly
                        buttonPosition="none"
                        fill
                        id="select-amount-input"
                        value={this.state.amount}
                        onValueChange={this.onAmountChange}
                    />
                </FormGroup>
                <WalletButtons
                    description={this.props.description}
                    onCancel={this.props.onCancel}
                    onSuccess={this.props.onSuccess}
                    isButtonDisabled={!!this.state.amount}
                />
            </div>
        );
    };
};

export default WalletCard;