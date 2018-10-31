import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

@observer 
export class Clock extends React.Component{
    @observable secondsPassed = 0;
    @observable errorMessageIsHidden = true;
    
    componentWillMount() {
        setInterval(() => {
            this.secondsPassed++
        }, 1000)
    }

    @action.bound reset(){
        this.secondsPassed = 0;
        this.errorMessageIsHidden = false;
        setTimeout(() => {
            this.errorMessageIsHidden = true;
        }, 3000);
    }

    render() {
        return (
        <div> Seconds passed: {this.secondsPassed} 
            <button onClick={this.reset}>Reset timer </button> 
            <span hidden={this.errorMessageIsHidden}> Timer has been reset.</span>
        </div>);
    }
};