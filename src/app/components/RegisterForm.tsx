import * as React from 'react';

export class RegisterForm extends React.Component<{
    handleSubmit: (event) => void;
    handleChange: (event) => void;
    name: string;
    email: string;
    password: string;
}, {}> {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="Name">Name</label>
                <input id="nameInput" name="nameInput" type="text" value={this.props.name} onChange={this.props.handleChange} />

                <label htmlFor="Email">Email</label>
                <input id="emailInput" name="emailInput" type="text" value={this.props.email} onChange={this.props.handleChange} />

                <label htmlFor="Password">Password</label>
                <input id="passwordInput" name="passwordInput" type="text" value={this.props.password} onChange={this.props.handleChange} />
                <button>Register</button>
            </form>
        );
    }
}