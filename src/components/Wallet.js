import React from "react";
// import styles from "../styles/styles.scss";
import {Button} from "@blueprintjs/core";


const Wallet = () => {
    return (
        // <div className={styles.container}>
        <div className="wallet">
            <h5 className="wallet__header">Lucid Wallet</h5>
            <div className="wallet__card">
                <div className="wallet__card__content">
                    <p className="wallet__card__content__balance">1,748</p>
                    <p className="wallet__card__content__currency">BTC</p>
                    <div className="wallet__card__content__buttonGroup">
                        {/*<button className={styles.wallet__card__content__button__blue} >Top-up account</button>*/}
                        <Button
                         fill
                         minimal
                         active
                         text="Top-up account"
                         className="bp3-intent-primary"/>
                        <button className="wallet__card__content__button__grey">Transfer to Bank</button>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Wallet;
