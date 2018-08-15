import React, { Component } from 'react';
import Transaction from '../components/Transaction'
import uid from 'uid'
import { Card, Button } from '@blueprintjs/core'
import ContentHeader from '../components/ContentHeader';
import {connect} from 'react-redux';

// <<<<<<< HEAD

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
// =======
// class PendingTransactions extends Component {
//     state={transactions: []}
//     componentDidMount = () => {
//         console.log(this.props.transactions)
//         this.setState({ transactions: this.props.transactions })
//         // console.log(this.state.transactions)
//     }
//     render() {
//         return (
//             <div className="pendingTransactions">
//                 <ContentHeader title='Pending transactions' />
//                 {
//                     this.state.transactions.map((transaction) => {
//                         return (
//                             <div key={uid()} onClick={() => this.props.getTransaction(transaction)}>
//                                 <Transaction transaction={transaction} />
//                             </div>
//                         )
//                     })
//                 }
//                 {console.log(this.state.transactions)}
//                 <Card className="pendingTransaction_controls">
//                     <div className="pendingTransaction_controls_btn">
//                         <Button
//                             fill
//                             minimal
//                             active
//                             text="Request funds"
//                             className="bp3-intent-success"
//                         />
//                     </div>
//                     <div className="pendingTransaction_controls_btn">
//                         <Button
//                             fill
//                             minimal
//                             active
//                             text="Send funds"
//                             className="bp3-intent-danger"
//                         />
//                     </div>
//                 </Card>
//             </div>
//         );
//     }
// >>>>>>> connectTransactionsToStore

// }
const mapStateToProps = (state) => {
    return {
        transactions: state.transactions
    }
}
export default connect(mapStateToProps)(PendingTransactions);