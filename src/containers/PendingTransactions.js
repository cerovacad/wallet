import React from 'react';
import Transaction from '../components/Transaction'
import uid from 'uid'
import { Card, Button } from '@blueprintjs/core'
import AlterContentHeader from '../components/AlterContentHeader';

const PendingTransactions = ({ transactions }) => (
    <div className="pendingTransactions">
        <AlterContentHeader title='Pending transactions'/>
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
