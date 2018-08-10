import React, { Component } from 'react';
import { Card, Icon } from '@blueprintjs/core';

class TransactionStatus extends Component {
    state = { 
        status: '1'
     }
    render() {
        return (
                <Card>
                    <h4>Website changes</h4>
                    <ul className='requesting_list'>

                        <li className='requesting_list_item'>
                            <div 
                                style={ parseInt(this.state.status) > 0 ? {} : { visibility: 'hidden' }} 
                                className='requesting_list_progress first'>
                            </div>
                            <span className='info'>
                                <Icon icon='symbol-circle' iconSize='12' className='requesting_list_icon'/>
                                You requested funds from:<br/> 
                                <span className='requesting_list_item_user'>qweqwe@qwe.com</span>
                            </span>
                        </li>

                        <li className='requesting_list_item'>
                            <div 
                                style={ parseInt(this.state.status) > 1 ? {} : { visibility: 'hidden' }}
                                className='requesting_list_progress'>
                            </div>
                            <span className={ parseInt(this.state.status) > 0 ? 'waiting' : ''}>
                                <Icon icon='symbol-circle' iconSize='12' className='requesting_list_icon'/>
                                Waiting for escrow
                            </span>
                        </li>

                        <li className='requesting_list_item'>
                            <div 
                                style={ parseInt(this.state.status) > 2 ? {} : { visibility: 'hidden' }}
                                className='requesting_list_progress'>
                            </div>
                            <span className={parseInt(this.state.status) > 1 ? 'received' : ''}>
                                <Icon icon='symbol-circle' iconSize='12' className='requesting_list_icon'/>
                                Escrow funds received
                            </span>
                        </li>

                        <li className='requesting_list_item'>
                            <div 
                                style={ parseInt(this.state.status) > 3 ? {} : { visibility: 'hidden' }}
                                className='requesting_list_progress'>
                            </div>
                            <span className={parseInt(this.state.status) > 2 ? 'inProgress' : ''}>
                                <Icon icon='symbol-circle' iconSize='12' className='requesting_list_icon'/>
                                Work in progress
                            </span>
                        </li>

                        <li className='requesting_list_item'>
                            <div 
                                style={ parseInt(this.state.status) > 3 ? {} : { visibility: 'hidden' }}
                                className='requesting_list_progress'>
                            </div>
                            <span className={parseInt(this.state.status) > 3 ? 'delivered' : ''}>
                                <Icon icon='symbol-circle' iconSize='12' className='requesting_list_icon'/>
                                Work delivered and escrow released
                            </span>
                        </li>

                        <li className='requesing_list_item'>
                            <span className={parseInt(this.state.status) > 3 ? 'info' : ''}>
                                <Icon icon='symbol-circle' iconSize='12' className='requesting_list_icon'/>
                                Deadline: 15 July 2018
                            </span>
                        </li>

                    </ul>
                </Card>
        );
    }
}

export default TransactionStatus;