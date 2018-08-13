import React, { Component } from "react";
import { FormGroup, InputGroup, TextArea, NumericInput, Button } from "@blueprintjs/core";
import { DateInput } from "@blueprintjs/datetime";
import { IconNames } from "@blueprintjs/icons";
import ContentHeader from "../components/ContentHeader";
import UploadFileList from "../components/UploadFileList";
import moment from "moment";
import UploadedFile from "../entities/UploadedFile";

class SendFunds extends Component {
    state = {
        title: "",
        description: "",
        // MOCK DATA TO DISPLAY:
        fileList: [{
            fileName: "Example.jpg",
            lastModified: 1533722248468
        }],
        price: "",
        deadline: null,
        sendTo: "",
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onPriceChange = (valueAsNumber) => {
        const price = valueAsNumber;
        this.setState(() => ({ price }));
    };
    onDateChange = (selectedDate) => {
        const deadline = selectedDate;
        this.setState(() => ({ deadline }));
    };
    onSendToChange = (e) => {
        const sendTo = e.target.value;
        this.setState(() => ({ sendTo }));
    };
    onCancelClick = () => {
        console.log("cancel btn clicked");
        this.clearInputs();
    };
    onFilesChange = (e) => {
        const fileArray = Array.from(e.target.files);
        const fileList = fileArray.map((fileItem) => {
            return new UploadedFile(fileItem);
        });
        // SAVE LIST IN REDUX STORE
        this.setState(() => ({ fileList }));
    };
    clearInputs = () => {
        this.setState(() => ({
            title: "",
            description: "",
            fileList: [],
            price: "",
            deadline: null,
            sendTo: ""
        }));
    };

    onSendClick = () => {
        if (this.state.title
            && this.state.price
            && this.state.sendTo
            && this.state.deadline) {
            console.log("Send funds clicked");
            // DISPATCH ACTION TO SEND FUNDS

            // CLEAR FORM
            this.clearInputs();
        };
    };

    isButtonDisabled = () => {
        if (this.state.title
            && this.state.price
            && this.state.deadline
            && this.state.sendTo) {
            return false;
        } else {
            return true;
        }
    };

    render() {
        return (
            <div className="send-funds">
                <ContentHeader title="Send funds" />
                <div className="send-funds__container">
                    <FormGroup
                        label="Title"
                        labelFor="send-funds-input-title"
                    >
                        <InputGroup
                            type="text"
                            id="send-funds-input-title"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                        />
                    </FormGroup>
                    <FormGroup
                        label="Description"
                        labelFor="send-funds-textarea-description"
                    >
                        <TextArea
                            large
                            fill
                            className="send-funds__container__descriptionArea"
                            id="send-funds-textarea-description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </FormGroup>
                    <UploadFileList fileList={this.state.fileList} form={true} />
                    <FormGroup
                        label="Add file"
                        labelFor="send-funds-input-file"
                        className="bp3-file-input send-funds__container__labelUpload"
                    >
                        <input
                            multiple
                            onChange={this.onFilesChange}
                            type="file"
                            id="send-funds-input-file"
                        />
                    </FormGroup>
                    <div className="send-funds__container__price">
                        <FormGroup
                            label="Price"
                            labelFor="send-funds-input-price"
                        >
                            <NumericInput
                                allowNumericCharactersOnly
                                buttonPosition="none"
                                fill
                                id="send-funds-input-price"
                                value={this.state.price}
                                onValueChange={this.onPriceChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="send-funds__container__deadline">
                        <FormGroup
                            label="Deadline"
                            labelFor="send-funds-input-deadline"
                        >
                            <DateInput
                                closeOnSelection
                                canClearSelection
                                formatDate={date => moment(date).format("Do MMMM YYYY")}
                                parseDate={str => moment(str)}
                                inputProps={{ className: "send-funds__container__deadline__input", leftIcon: IconNames.CALENDAR }}
                                id="send-funds-input-deadline"
                                onChange={this.onDateChange}
                                value={this.state.deadline}
                                minDate={moment()._d}
                            />
                        </FormGroup>
                    </div>
                    <FormGroup
                        label={"Send to"}
                        labelFor={"send-funds-input-send-to"}
                        className="send-funds__container__sendTo"
                    >
                        <InputGroup
                            type="email"
                            id="send-funds-input-send-to"
                            value={this.state.sendTo}
                            onChange={this.onSendToChange}
                        />
                    </FormGroup>
                    <div className="send-funds__container__buttons">
                        <Button
                            active
                            text="Cancel"
                            minimal
                            id="send-funds__container__buttons--cancel"
                            onClick={this.onCancelClick}
                        />
                        <Button
                            active
                            text="Send Funds"
                            minimal
                            id="send-funds__container__buttons--send"
                            onClick={this.onSendClick}
                            disabled={this.isButtonDisabled()}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default SendFunds;