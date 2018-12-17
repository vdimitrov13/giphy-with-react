import * as React from 'react';

export class LoginForm extends React.Component< {
    handleSubmit: (event) => void;
    handleChange: (event) => void;
    emailInput: string;
    passwordInput: string;
}, {} > { 

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="Email">Email</label>
                <input id="emailInput" name="emailInput" type="text" value ={this.props.emailInput} onChange={this.props.handleChange}/>   
                <label htmlFor="Password">Password</label>
                <input id="passwordInput" name="passwordInput" type="text" value ={this.props.passwordInput} onChange={this.props.handleChange}/>       
                <button>Find GIF</button>
            </form>
        );
    }
}