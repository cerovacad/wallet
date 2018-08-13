import React from "react";
import { Button } from "@blueprintjs/core";


const WalletButtons = ({
    description,
    onCancel,
    onSuccess,
    isButtonDisabled
}) => {
    return (
        <div className="wallet-buttons">
            <div className="short-btn">
                <Button
                    active
                    text="Cancel"
                    fill
                    minimal
                    id="wallet-buttons-cancel"
                    onClick={onCancel}
                />
            </div>
            <div className="short-btn">
                <Button
                    active
                    text={description}
                    fill
                    disabled={!isButtonDisabled}
                    minimal
                    className="bp3-intent-success"
                    onClick={onSuccess}
                />
            </div>
        </div>
    );
};

export default WalletButtons;