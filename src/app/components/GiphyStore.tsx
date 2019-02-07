import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { APICalls } from '../services/APICalls'
import { GiphyForm } from './GiphyForm';

@observer
export class GiphyStore extends React.Component<{
    isLoggedIn: boolean
    logout: () => void;
}, {}> {
    @observable imgURL = '';
    @observable formState = '';

    constructor(props) {
        super(props);
        this.getRandomGifSuccessCall = this.getRandomGifSuccessCall.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSuccessFormSubmit = this.handleSuccessFormSubmit.bind(this);
    }

    componentDidMount() {
        this.getRandomGIF();
    }

    handleFormSubmit(event) {
        event.preventDefault();
        APICalls.sendGetRequest(this.handleSuccessFormSubmit, this.formState);
    }

    handleSuccessFormSubmit(response) {
        let promise = response.json();
        promise.then(function (data) {
            let randomNum = Math.floor(Math.random() * 15) + 1;
            this.imgURL = data.data[randomNum].images.original.url;
        }.bind(this));
    }

    handleFormChange(event) {
        this.formState = event.target.value;
    }

    getRandomGIF() {
        APICalls.sendGetRequest(this.getRandomGifSuccessCall, null);
    }

    @action getRandomGifSuccessCall(response) {
        let promise = response.json();
        promise.then(function (data) {
            this.imgURL = data.data.image_url;
        }.bind(this));
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <div className='grid-container'>
                    <div id='gif-container'>
                        <img src={this.imgURL}></img>
                        <button onClick={this.getRandomGIF.bind(this)}>Get a Gif</button>
                        <GiphyForm handleSubmit={this.handleFormSubmit} handleChange={this.handleFormChange} formState={this.formState} />
                    </div>
                    <button id='logout' onClick={this.props.logout}>Logout</button>
                </div>
            )
        }
        return ''
    };
};