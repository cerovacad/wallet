import React from "react";
import { Tag } from "@blueprintjs/core";

const UploadFileList = (props) => {
    const onFileDelete = (e) => {
        console.log("item deleted");
        // DISPATCH ACTION TO REMOVE ITEM FROM STORE
    };
    return (
        <div>
            <p>Files</p>
            {
                props.fileList && props.fileList.map((file) => {
                    return (
                        <Tag
                            key={file.lastModified}
                            large
                            // ENABLE REMOVE OPTION ONLY IF COMPONENT IS INSIDE OF SEND_FORM
                            onRemove={props.form && onFileDelete}
                            className="upload-file-tag"
                        >
                            <span>{file.fileName}</span>
                        </Tag>
                    )
                })
            }
        </div>
    );
}


export default UploadFileList;