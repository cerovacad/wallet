import React from 'react';
import { Card, Button, Tag } from '@blueprintjs/core'
import ContentHeader from './ContentHeader';

const IsRequesting = ({transaction}) => (
   <div className="isRequesting">
        <ContentHeader transaction={transaction} />
        <Card className='isRequesting_details'>
            <h4>{transaction.title}</h4>
            <div className='isRequesting_user'>
                <p><i>Created by:</i></p>
                <p>{transaction.user}</p>
            </div>
            <div className='isRequesting_deadline'>
                <p><i>Deadline:</i></p>
                <p>{transaction.date}</p>
            </div>
            <hr className='isRequesting_hr'/>
            <div className='isRequesting_description'>
                <h4>Description</h4>
                <p>{transaction.longDescription}</p>
            </div>
            <div className='isRequesting_files'>
                <h4>Files</h4>
                <Tag
                    minimal
                    large
                    interactive
                    className='isRequesting_files_tag'
                >Example.jpg</Tag>
            </div>

            <hr className='isRequesting_hr'/>

            <div className="isRequesting_controls">
                <div className="short-btn">
                    <Button
                        fill
                        minimal
                        active
                        text="Add comment"
                        className="bp3-intent-primary" 
                    />
                </div>
                <div className="short-btn">
                    <Button
                        fill
                        minimal
                        active
                        text="Add funds"
                        className="bp3-intent-success"
                    />
                </div>
            </div>
        </Card>
   </div> 
);

export default IsRequesting;