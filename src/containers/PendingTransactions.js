import React from 'react';
import Transaction from '../components/Transaction'
import uid from 'uid'
import { Card, Button } from '@blueprintjs/core'
import ContentHeader from '../components/ContentHeader';
import {connect} from 'react-redux';

const PendingTransactions = ({
    transactions,
    getTransaction,
    displaySendForm,
    displayRequestForm }) => (
        <div className="pendingTransactions">
            <ContentHeader title='Pending transactions' />
            {transactions.map((transaction) => {
                return (
                    <div key={uid()} onClick={() => getTransaction(transaction)}>
                        <Transaction transaction={transaction} />
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
                        onClick={displayRequestForm}
                    />
                </div>
                <div className="pendingTransaction_controls_btn">
                    <Button
                        fill
                        minimal
                        active
                        text="Send funds"
                        className="bp3-intent-danger"
                        onClick={displaySendForm}
                    />
                </div>
            </Card>
        </div>
    );
const mapStateToProps = (state) => {
    return {
        transactions: state.transactions
    }
}
export default connect(mapStateToProps)(PendingTransactions);