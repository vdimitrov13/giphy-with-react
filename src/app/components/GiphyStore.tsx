import * as React from 'react';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';
import { APICalls } from '../services/APICalls'
import { GiphyForm } from './GiphyForm';

@observer 
export class GiphyStore extends React.Component{
    @observable imgURL = '';
    @observable formState = '';

    constructor(props) {
        super(props);
        this.getRandomGifSuccessCall = this.getRandomGifSuccessCall.bind(this);
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

    componentDidMount(){
        this.getRandomGIF();
    }
    
    getRandomGIF(){
        APICalls.sendRequest(this.getRandomGifSuccessCall, null);       
    }
    
    @action getRandomGifSuccessCall(response){
        let promise = response.json();
        promise.then(function(data){
            this.imgURL = data.data.image_url;
        }.bind(this));
    }
  
    render() {
        return (
        <div id='gif-container'> 
           <img src={this.imgURL}></img>
           <button onClick={this.getRandomGIF.bind(this)}>Get a Gif</button>
           <GiphyForm handleSubmit= {this.handleSubmit} handleChange = {this.handleChange} formState= {this.formState}/>
        </div>);
    }
};