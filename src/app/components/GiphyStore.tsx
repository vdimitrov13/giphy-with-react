import * as React from 'react';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';
import { APICalls } from '../services/APICalls'

@observer 
export class GiphyStore extends React.Component{
    @observable imgURL = '';

    constructor(props) {
        super(props);
        this.getRandomGifSuccessCall = this.getRandomGifSuccessCall.bind(this);
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
        </div>);
    }
};