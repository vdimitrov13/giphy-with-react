import * as React from 'react';
import { observer } from 'mobx-react';

interface CustomInputProps{
    handleSubmit: (event) => void;
    handleChange: (event) => void;
    formState: string;
}

@observer
export class GiphyForm extends React.Component<CustomInputProps> { 
    render() {
        return (
        <form onSubmit={this.props.handleSubmit}>
            <label htmlFor="GIF">Search GIF</label>
            <input id="GIF" name="GIF" type="text" value ={this.props.formState} onChange={this.props.handleChange}/>     
            <button>Send data!</button>
        </form>
        );
    }
}