import * as React from 'react';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';
import { APICalls } from '../services/APICalls'

@observer
export class GiphyForm extends React.Component {
    @observable formState = ''; 
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSuccessFormSubmit = this.handleSuccessFormSubmit.bind(this);
     }
  
    handleSubmit(event) {
        event.preventDefault();
        //console.log(this.formState);
        APICalls.sendRequest(this.handleSuccessFormSubmit, this.formState)
    }

    handleSuccessFormSubmit(response){
        console.log(response);
        
        // let promise = response.json();
        // promise.then(function(data){
        //     this.imgURL = data.data.image_url;
        // }.bind(this));
    }

    handleChange(event) {
        this.formState = event.target.value;
    }
  
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
        
            <label htmlFor="GIF">Search GIF</label>
            <input id="GIF" name="GIF" type="text" value ={this.formState} onChange={this.handleChange}/>

            <button>Send data!</button>
        </form>
        );
    }
}