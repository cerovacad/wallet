import React from "react";
import { Button } from "@blueprintjs/core"
import { descriptionToTextAndStyle } from "../utils/functions";
import { removeTransaction } from '../actions/transactionActions';
import { connect } from 'react-redux';

const TransactionButtons = ({ description, removeTransaction, id, removeDetails }) => {
    const onAddComment = (e) => {
        console.log("Add comment clicked!");
        // DISPATCH ACTION FROM PROPS HERE
    };
    const onAcceptFunds = (e) => {
        console.log("Funds accepted!");
        // DISPATCH ACTION FROM PROPS HERE
    };
    const onDeclineFunds = (e) => {
        console.log("Funds declined!");
        console.log(id);
        removeTransaction({ id });
        removeDetails();
    };
    const onButtonClick = (e) => {
        console.log(`${descriptionToTextAndStyle(description).text} clicked!`);
        // DISPATCH ACTION FROM PROPS HERE
    };
    return (
        <div>
            <div className={descriptionToTextAndStyle(description).containerClassName}>
                <div className="short-btn">
                    <Button
                        fill
                        minimal
                        active
                        text="Add comment"
                        className="bp3-intent-primary"
                        onClick={onAddComment}
                    />
                </div>
                {
                    (description === "is-sending")
                        ? <div className="short-btn">
                            <Button
                                fill
                                minimal
                                active
                                text={descriptionToTextAndStyle(description).text1}
                                className={descriptionToTextAndStyle(description).className1}
                                onClick={onAcceptFunds}
                            />
                            <Button
                                fill
                                minimal
                                active
                                text={descriptionToTextAndStyle(description).text2}
                                className={descriptionToTextAndStyle(description).className2}
                                onClick={onDeclineFunds}
                            />
                        </div>

                        : <div className="short-btn">
                            <Button
                                fill
                                minimal
                                active
                                text={descriptionToTextAndStyle(description).text}
                                className={descriptionToTextAndStyle(description).className}
                                onClick={onButtonClick}
                            />
                        </div>
                }
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    removeTransaction: (data) => dispatch(removeTransaction(data))
});

export default connect(null, mapDispatchToProps)(TransactionButtons);