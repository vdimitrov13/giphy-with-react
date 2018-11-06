import * as React from 'react';

export class GiphyForm extends React.Component< {
    handleSubmit: (event) => void;
    handleChange: (event) => void;
    formState: string;
}, {} > { 

    render() {
        return (
        <form onSubmit={this.props.handleSubmit}>
            <label htmlFor="GIF">Search GIF</label>
            <input id="GIF" name="GIF" type="text" value ={this.props.formState} onChange={this.props.handleChange}/>     
            <button>Find GIF</button>
        </form>
        );
    }
}