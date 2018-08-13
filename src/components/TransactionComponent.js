import React from "react";
import { Card } from '@blueprintjs/core'
import ContentHeader from './ContentHeader';
import TransactionDescription from "./TransactionDescription";
import TransactionButtons from "./TransactionButtons";
import UploadFileList from "./UploadFileList";
import TransactionStatus from './TransactionStatus';

const fileList=[{
    fileName: "Example.jpg",
    lastModified: 1533722248468
}];

const TransactionComponent = ({ transaction }) =>
    (
        <div className="transaction__container">
            <ContentHeader transaction={transaction} />
            <Card>
                {/* <div>TRANSACTION STATUS COMPONENT GOES HERE</div> */}
                <TransactionStatus />
                <hr className="transaction__container__hr" />
                <TransactionDescription
                    longDescription={transaction.longDescription}
                />
                <UploadFileList fileList={fileList}/>
                <TransactionButtons
                    description={transaction.description}
                />
            </Card>
        </div>
    );


export default TransactionComponent;