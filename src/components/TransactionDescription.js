import React from "react";

const TransactionDescription = ({ longDescription }) => (
    <div>
        <div className="description__container">
            <h4>Description</h4>
            <p>{longDescription}</p>
        </div>
    </div>
);

export default TransactionDescription;