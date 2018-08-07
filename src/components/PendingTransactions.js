import React from 'react';
import Transaction from '../components/Transaction'
import uid from 'uid'
import { Card, Button } from '@blueprintjs/core'

const Transactions = () => (
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

export default Transactions;

const transactions = [{
    type: 'incoming',
    title: 'Website changes',
    description: 'requesting',
    user: 'example@gmail.com',
    status: 'in-progress',
    balance: 0.008
},{
    type: 'outgoing',
    title: 'Photo retouching',
    description: 'sending',
    user: 'qewqewqwewq@wqail.com',
    status: 'waiting-for-escrow',
    balance: 0.06
},{
    type: 'incoming',
    title: 'Website changes',
    description: 'is-sending',
    user: 'example@gmail.com',
    status: 'waiting-for-your-reply',
    balance: 0.008
},{
    type: 'outgoing',
    title: 'Photo retouching',
    description: 'is-requesting',
    user: 'qewqewqwewq@wqail.com',
    status: 'waiting-for-escrow',
    balance: 0.06
},{
    type: 'incoming',
    title: 'Photo retouching',
    description: 'is-sending',
    user: 'qewqeewq@wqail.com',
    status: 'delivered-and-escrow-released',
    balance: 0.9
}]

// waiting for escrow
// escrow funds recived
// work in progress
// delivered
