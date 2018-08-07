import React from "react";
import styles from "../styles/styles.scss";


const Wallet = () => {
    return (
        // <div className={styles.container}>
            <div className={styles.wallet}>
                <h5 className={styles.wallet__header}>Lucid Wallet</h5>
                <div className={styles.wallet__card}>
                    <div className={styles.wallet__card__content}>
                        <p className={styles.wallet__card__content__balance}>1,748</p>
                        <p className={styles.wallet__card__content__currency}>BTC</p>
                        <button className={styles.wallet__card__content__button__blue} >Top-up account</button>
                        <button className={styles.wallet__card__content__button__grey}>Transfer to Bank</button>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Wallet;
