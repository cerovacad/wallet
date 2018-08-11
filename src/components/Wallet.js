import React, { Component } from "react";
import { Button } from "@blueprintjs/core";
import ContentHeader from "./ContentHeader";
import WalletCard from "./WalletCard";
import { setWalletButtonDescription } from "../utils/functions";


class Wallet extends Component {
    state = {
        topUpAccount: false,
        transferToBank: false
    };

    onTopUpAccount = () => {
        this.setState(() => ({ topUpAccount: true, transferToBank: false }));
        console.log("Top up account clicked!");
    };

    onTransferToBank = () => {
        this.setState(() => ({ transferToBank: true, topUpAccount: false }));
        console.log("Transfer to bank clicked!");
    };
    onSuccess = () => {
        if (this.state.topUpAccount) {
            console.log("dispatch action to top-up account");
        } else if (this.state.transferToBank) {
            console.log("dispatch action to transfer to bank");
        }
        // CLEAR AMOUNT FROM INPUT AFTER DISPATCHING
    };
    onCancel = () => {
        console.log("canceled");
        this.setState(() => ({ topUpAccount: false, transferToBank: false }));
    };

    render() {
        return (
            <div className="wallet">
                <ContentHeader title={"Lucid Wallet"} />
                <div className="wallet__card">
                    <div className="wallet__card__content">
                        <p className="wallet__card__content__balance">1,748</p>
                        <p className="wallet__card__content__currency">BTC</p>
                        <Button
                            fill
                            minimal
                            active
                            text="Top-up account"
                            className="bp3-intent-primary vertical-buttons__upper"
                            onClick={this.onTopUpAccount}
                        />
                        <Button
                            fill
                            minimal
                            active
                            text="Transfer to bank"
                            className="bp3-dark-text-color-muted"
                            onClick={this.onTransferToBank}
                        />
                    </div>
                </div>
                {
                    this.state.topUpAccount &&
                    <WalletCard
                        onCancel={this.onCancel}
                        onSuccess={this.onSuccess}
                        description={
                            setWalletButtonDescription(this.state.topUpAccount, this.state.transferToBank)
                        }
                    />
                }
                {
                    this.state.transferToBank &&
                    <WalletCard
                        onCancel={this.onCancel}
                        onSuccess={this.onSuccess}
                        description={
                            setWalletButtonDescription(this.state.topUpAccount, this.state.transferToBank)
                        }
                    />
                }
            </div>
        );
    };
};

export default Wallet;
