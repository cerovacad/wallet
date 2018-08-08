import React from 'react';
import Transaction from '../components/Transaction'
import uid from 'uid'
import { Card, Button } from '@blueprintjs/core'

const PendingTransactions = ({ transactions }) => (
    <div className="pendingTransactions">
        <Card className="pendingTransactions_header">
            <h4>Pending transactions</h4>
        </Card>
        {transactions.map((transaction) => {
            return (
                <div key={uid()}>
                    <Transaction transaction={transaction}/>
                </div> 
            )
        })}
        <Card className="pendingTransaction_controls">
            <div className="pendingTransaction_controls_btn">
                <Button
                    fill
                    minimal
                    active
                    text="Request funds"
                    className="bp3-intent-success" 
                />
            </div>
            <div className="pendingTransaction_controls_btn">
                <Button
                    fill
                    minimal
                    active
                    text="Send funds"
                    className="bp3-intent-danger"
                />
            </div>
        </Card>
    </div>
    );

export default PendingTransactions;
