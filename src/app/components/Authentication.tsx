import * as React from 'react';
import { Clock } from './Clock';
import { GiphyStore } from './GiphyStore';
import { Login } from './Login'
import { Register } from './Register';
import { observable } from 'mobx';
import { observer } from 'mobx-react';


@observer
export class Authentication extends React.Component {
    @observable loggedIn = false;

    constructor(props) {
        super(props);
        this.handleSuccessFormSubmit = this.handleSuccessFormSubmit.bind(this);
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.loggedIn = false;
    }

    handleSuccessFormSubmit(response) {
        let promise = response.json();
        promise.then(function (data) {
            if (data.success) {
                this.loggedIn = true;
            }
        }.bind(this));
    }

    render() {
        return (
            <div>
                <div><Login handleSuccessFormSubmit={this.handleSuccessFormSubmit} isLoggedIn={this.loggedIn} /></div>
                <div><Register isLoggedIn={this.loggedIn}/></div>
                <div><Clock /></div>
                <div><GiphyStore isLoggedIn={this.loggedIn} logout={this.logout}/></div>
            </div>
        );
    }
}
