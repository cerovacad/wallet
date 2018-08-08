import React, { Component } from 'react';
import PendingTransactions from './PendingTransactions';

class MainPage extends Component {
    state = { 
        arr: [{
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
     }
    render() {
        return (
            <div>
                <PendingTransactions transactions={this.state.arr}/>
            </div>
        );
    }
}

export default MainPage;