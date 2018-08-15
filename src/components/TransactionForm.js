import React, { Component } from "react";
import { FormGroup, InputGroup, TextArea, NumericInput, Button } from "@blueprintjs/core";
import { DateInput } from "@blueprintjs/datetime";
import { IconNames } from "@blueprintjs/icons";
import ContentHeader from "../components/ContentHeader";
import UploadFileList from "../components/UploadFileList";
import moment from "moment";
import UploadedFile from "../entities/UploadedFile";
import { connect } from 'react-redux';
import { addTransaction } from '../actions/transactionActions';

class TransactionForm extends Component {
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
        user: "",
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
    onUserChange = (e) => {
        const user = e.target.value;
        this.setState(() => ({ user }));
    };
    onCancelClick = () => {
        this.props.closeForm();
    };
    onFilesChange = (e) => {
        const fileArray = Array.from(e.target.files);
        const fileList = fileArray.map((fileItem) => {
            return new UploadedFile(fileItem);
        });
        this.setState(() => ({ fileList }));
    };
    onRemoveFile = (name) => {
        const list = this.state.fileList;
        const newList = list.filter((file) => {
            return file.fileName !== name;
        });
        this.setState(() => ({ fileList: newList }));
    };
    clearInputs = () => {
        this.setState(() => ({
            title: "",
            description: "",
            fileList: [],
            price: "",
            deadline: null,
            user: ""
        }));
    };

    onSubmitForm = () => {
        const { title, price, description, deadline, user } = this.state;
        if (title
            && price
            && user
            && deadline) {

            if (this.props.text.includes("Send")) {
                this.props.addTransaction({
                    type: "outgoing",
                    title,
                    description: "sending",
                    longDescription: description,
                    user,
                    balance: price
                })
                this.clearInputs();
            }
            else if (this.props.text.includes("Request")) {
                this.props.addTransaction({
                    type: "incoming",
                    title,
                    longDescription: description,
                    description: "requesting",
                    user,
                    balance: price
                })
                this.clearInputs();
            }
        };
    };

    isButtonDisabled = () => {
        if (this.state.title
            && this.state.price
            && this.state.deadline
            && this.state.user) {
            return false;
        } else {
            return true;
        }
    };

    render() {
        return (
            <div className="form">
                <ContentHeader title={this.props.text} />
                <div className="form__container">
                    <FormGroup
                        label="Title"
                        labelFor="form-input-title"
                    >
                        <InputGroup
                            type="text"
                            id="form-input-title"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                        />
                    </FormGroup>
                    <FormGroup
                        label="Description"
                        labelFor="form-textarea-description"
                    >
                        <TextArea
                            large
                            fill
                            className="form__container__descriptionArea"
                            id="form-textarea-description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </FormGroup>
                    <UploadFileList
                        fileList={this.state.fileList}
                        form={true}
                        onRemoveFile={this.onRemoveFile}
                    />
                    <FormGroup
                        label="Add file"
                        labelFor="form-input-file"
                        className="bp3-file-input form__container__labelUpload"
                    >
                        <input
                            multiple
                            onChange={this.onFilesChange}
                            type="file"
                            id="form-input-file"
                        />
                    </FormGroup>
                    <div className="form__container__price">
                        <FormGroup
                            label="Price"
                            labelFor="form-input-price"
                        >
                            <NumericInput
                                allowNumericCharactersOnly
                                buttonPosition="none"
                                fill
                                id="form-input-price"
                                value={this.state.price}
                                onValueChange={this.onPriceChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="form__container__deadline">
                        <FormGroup
                            label="Deadline"
                            labelFor="form-input-deadline"
                        >
                            <DateInput
                                closeOnSelection
                                canClearSelection
                                formatDate={date => moment(date).format("Do MMMM YYYY")}
                                parseDate={str => moment(str)}
                                inputProps={{ className: "form__container__deadline__input", leftIcon: IconNames.CALENDAR }}
                                id="form-input-deadline"
                                onChange={this.onDateChange}
                                value={this.state.deadline}
                                minDate={moment()._d}
                            />
                        </FormGroup>
                    </div>
                    <FormGroup
                        label={this.props.labelText}
                        labelFor={this.props.labelText}
                        className="form__container__sendTo"
                    >
                        <InputGroup
                            type="email"
                            id={this.props.labelText}
                            value={this.state.user}
                            onChange={this.onUserChange}
                        />
                    </FormGroup>
                    <div className="form__container__buttons">
                        <Button
                            active
                            text="Cancel"
                            minimal
                            id="form__container__buttons--cancel"
                            onClick={this.onCancelClick}
                        />
                        <Button
                            active
                            text={this.props.text}
                            minimal
                            id="form__container__buttons--send"
                            onClick={this.onSubmitForm}
                            disabled={this.isButtonDisabled()}
                        />
                    </div>
                </div>
            </div>
        );
    }
};
const mapDispatchToProps = (dispatch) => ({
    addTransaction: (transaction) => dispatch(addTransaction(transaction))
});


export default connect(null, mapDispatchToProps)(TransactionForm);