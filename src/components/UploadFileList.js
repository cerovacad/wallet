import React from "react";
import { Tag } from "@blueprintjs/core";

const UploadFileList = (props) => {
    return (
        <div>
            <p>Files</p>
            {
                props.fileList && props.fileList.map((file) => {
                    return (
                        <Tag
                            key={file.lastModified}
                            large
                            onRemove={props.form && (() => { props.onRemoveFile(file.fileName) })}
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