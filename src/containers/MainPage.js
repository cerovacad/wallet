import React, { Component } from 'react';
import PendingTransactions from './PendingTransactions';
import TransactionComponent from '../components/TransactionComponent';
import Wallet from '../components/Wallet';


class MainPage extends Component {
    state = {
        arr: [{
            type: 'incoming',
            title: 'Website changes',
            description: 'requesting',
            user: 'example@gmail.com',
            status: 'in-progress',
            balance: 0.008,
            longDescription: 'Simply dummy text of the printing anddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
        }, {
            type: 'outgoing',
            title: 'Photo retouching',
            description: 'sending',
            user: 'qewqewqwewq@wqail.com',
            status: 'waiting-for-escrow',
            balance: 0.06,
            longDescription: 'Simply dummy text of the printing anddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'

        }, {
            type: 'incoming',
            title: 'Website changes',
            description: 'is-sending',
            user: 'example@gmail.com',
            status: 'waiting-for-your-reply',
            balance: 0.008,
            longDescription: 'Simply dummy text of the printing anddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'

        }, {
            type: 'outgoing',
            title: 'Photo retouching',
            description: 'is-requesting',
            user: 'qewqewqwewq@wqail.com',
            status: 'waiting-for-escrow',
            balance: 0.06,
            longDescription: 'Simply dummy text of the printing anddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'

        }, {
            type: 'incoming',
            title: 'Photo retouching',
            description: 'is-sending',
            user: 'qewqeewq@wqail.com',
            status: 'delivered-and-escrow-released',
            balance: 0.9,
            longDescription: 'Simply dummy text of the printing anddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'

        }],
        transaction: undefined
    }

    // UNTIL COMPONENT IS CONNECTED TO REDUX STORE
    getTransaction = (transaction) => {
        this.setState(() => ({ transaction }));
    };

    render() {
        return (
            <div className="mainPage__container">
                <Wallet/>
                <PendingTransactions transactions={this.state.arr} getTransaction={this.getTransaction} />
                {this.state.transaction && <TransactionComponent transaction={this.state.transaction} />}
            </div>
        );
    }
}

export default MainPage;