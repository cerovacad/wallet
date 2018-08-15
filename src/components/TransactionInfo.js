import React from 'react';

const TransactionInfo = ({ transaction }) => (
   <div>
        <h4>{transaction.title}</h4><br/>

        <span>Created by:</span><br/>
        <span>{transaction.user}</span><br/>
        <br/>
        <span>Deadline</span><br/>
        <span>{transaction.deadline}</span>
   </div> 
);

export default TransactionInfo;