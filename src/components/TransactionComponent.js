import React from "react";
import { Card } from '@blueprintjs/core'
import ContentHeader from './ContentHeader';
import TransactionDescription from "./TransactionDescription";
import TransactionButtons from "./TransactionButtons";
import UploadFileList from "./UploadFileList";
import TransactionStatus from './TransactionStatus';
import TransactionInfo from './TransactionInfo';

const fileList = [{
    fileName: "Example.jpg",
    lastModified: 1533722248468
}];

const TransactionComponent = ({ transaction, removeTransaction }) =>
    (
        <div className="transaction__container">
            <ContentHeader transaction={transaction} />
            <Card>
                {/* <div>TRANSACTION STATUS COMPONENT GOES HERE</div> */}

                { transaction.description === 'requesting' ? (
                    <TransactionStatus transaction={transaction} />
                ):(
                    <TransactionInfo transaction={transaction} />
                )}

                <hr className="transaction__container__hr" />
                <TransactionDescription
                    longDescription={transaction.longDescription}
                />
                <UploadFileList fileList={transaction.fileList} />
                <TransactionButtons
                    description={transaction.description}
                    id={transaction.id}
                    removeDetails={removeTransaction}
                />
            </Card>
        </div>
    );


export default TransactionComponent;