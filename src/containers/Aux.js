import React from 'react';
import IsRequesting from '../components/IsRequesting';

const Aux = () => (
   <IsRequesting transaction={transaction}/> 
);

export default Aux;

const transaction = {
    type: 'outgoing',
    title: 'Photo retouching',
    description: 'sending',
    user: 'qewqewqwewq@wqail.com',
    status: 'waiting-for-escrow',
    balance: 0.06,
    date: '11-12-2208',
    longDescription: 'Simply dummy text of the printing anddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
}