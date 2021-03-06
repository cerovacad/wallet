import React, { Component } from 'react';
import ContentHeader from './ContentHeader';
import TransactionStatus from './TransactionStatus'

const transaction = {
    type: 'incoming',
    title: 'Photo retouching',
    description: 'sending',
    user: 'qewqewqwewq@wqail.com',
    status: 'waiting-for-escrow',
    balance: 0.06,
    date: '11-12-2208',
    longDescription: 'Simply dummy text of the printing anddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
}

class Requesting extends Component {
    state = {  }
    render() {
        return (
           <div className='requesting'>
                <ContentHeader transaction={transaction}/>
                <TransactionStatus />
           </div> 
        );
    }
}

export default Requesting;