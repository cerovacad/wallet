import React from 'react';
import { Icon } from '@blueprintjs/core'
import { Card, Elevation } from "@blueprintjs/core";
import { statusToText, descriptionToText } from "../utils/functions"


const Transaction = ({transaction}) => (
        <Card interactive={true} elevation={Elevation.TWO} className="transaction">
            <div>
                <h4 className="transaction_title">{transaction.title}</h4>

                {/* CHECKDESCRIPTION TO DETERMINE REDOSLED */}
                {transaction.description === 'is-sending' || transaction.description === 'is-requesting' ? (
                    <div>
                        <p className="transaction_user">{transaction.user}</p>
                        <p>{descriptionToText(transaction.description)}</p>
                    </div>
                ):(
                    <div>
                        {/* CONVERT AND FORMAT DESCRIPTION PROPERLY */}
                        <p>{descriptionToText(transaction.description)}:</p>
                        <p className="transaction_user">{transaction.user}</p>
                    </div>
                )}

                <div className="transaction_status">
                    {/* STATUS STRING DETERMINES CSS CLASS */}
                    <span className={transaction.status}>
                        <Icon className="transaction_status_icon" icon='symbol-circle' iconSize='12'/>
                            {/* FORMAT STATUS STRING IN PROPER WAY */}
                            {statusToText(transaction.status)}
                    </span>
                </div>
            </div>
            <div className="transaction_balance">
                {/* STATUS STRING DETERMINES CSS CLASS */}
                <span className={transaction.type}>
                    {transaction.balance} Btc. 
                    <Icon 
                        className="transaction_balance_icon"
                        // DEPENDING ON TYPE ASIGN PROPER ICON
                        icon={ transaction.type === 'incoming' ? 'arrow-left' : 'arrow-right'}
                        iconSize='11'
                    />
                </span>
            </div>
        </Card>
);

export default Transaction;