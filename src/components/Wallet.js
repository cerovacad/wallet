import React from "react";
import { Button } from "@blueprintjs/core";


const Wallet = () => {
    return (
        <div className="wallet">
            <h5 className="wallet__header">Lucid Wallet</h5>
            <div className="wallet__card">
                <div className="wallet__card__content">
                    <p className="wallet__card__content__balance">1,748</p>
                    <p className="wallet__card__content__currency">BTC</p>
                    <Button
                        fill
                        minimal
                        active
                        text="Top-up account"
                        className="bp3-intent-primary wallet__card__content__button" />

                    <Button
                        fill
                        minimal
                        active
                        text="Transfer to bank"
                        className="bp3-dark-text-color-muted" />
                </div>
            </div>
        </div>
    );
};

export default Wallet;
