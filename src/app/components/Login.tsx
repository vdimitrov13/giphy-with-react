import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { APICalls } from '../services/APICalls'
import { LoginForm } from './LoginForm';

@observer
export class Login extends React.Component<{
    handleSuccessFormSubmit: (event) => void;
    isLoggedIn: boolean;
}, {}> {

    @observable emailInput = '';
    @observable passwordInput = '';

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    componentDidMount() {

    }

    handleFormSubmit(event) {
        event.preventDefault();
        var loginData = { email: this.emailInput, password: this.passwordInput };
        APICalls.postData(this.props.handleSuccessFormSubmit, loginData, "login");
    }

    handleFormChange(event) {
        if (event.nativeEvent.srcElement.id == 'emailInput') {
            this.emailInput = event.target.value;
        }
        else {
            this.passwordInput = event.target.value;
        }
    }

    render() {
        if(!this.props.isLoggedIn){
            return (
                <div className='grid-container'>
                    <div id='login-form-container'>
                        <LoginForm
                            handleSubmit={this.handleFormSubmit}
                            handleChange={this.handleFormChange}
                            emailInput={this.emailInput}
                            passwordInput={this.passwordInput}
                        />
                    </div>
                </div>
            )
        }
        return ''
    };
};