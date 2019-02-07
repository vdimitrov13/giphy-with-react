import * as React from 'react';
import { observer } from 'mobx-react';
import { computed, observable, action } from 'mobx';
import { APICalls } from '../services/APICalls'
import { RegisterForm } from './RegisterForm';

@observer
export class Register extends React.Component <{
    isLoggedIn: boolean;
}, {}> {
    @observable nameInputFormValue = "";
    @observable emailInputFormValue = "";
    @observable passwordInputFormValue = "";

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSuccessFormSubmit = this.handleSuccessFormSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleFormSubmit(event) {
        event.preventDefault();
        let formState = {
            name: this.nameInputFormValue,
            email: this.emailInputFormValue,
            password: this.passwordInputFormValue
        }
        APICalls.postData(this.handleSuccessFormSubmit, formState, "registration");
    }

    handleSuccessFormSubmit(response) {
        let promise = response.json();
        promise.then(function (data) {
            console.log(data)
        }.bind(this));
    }

    handleFormChange(event) {
        var idOfElement = event.nativeEvent.srcElement.id;

        switch (idOfElement) {
            case "nameInput":
                this.nameInputFormValue = event.target.value;
                break;
            case "emailInput":
                this.emailInputFormValue = event.target.value;
                break;
            case "passwordInput":
                this.passwordInputFormValue = event.target.value;
                break;
        }
    }

    render() {
        if(!this.props.isLoggedIn){
            return (
                <div className='grid-container'>
                    <div id='register-form-container'>
                        <RegisterForm
                            handleSubmit={this.handleFormSubmit}
                            handleChange={this.handleFormChange}
                            name={this.nameInputFormValue}
                            email={this.emailInputFormValue}
                            password={this.passwordInputFormValue}
                        />
                    </div>
                </div>
            )
        }
        return ''
    };
};