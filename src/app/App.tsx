import * as ReactDOM from 'react-dom';
import * as React from "react";
import { Clock } from './components/Clock';
import { GiphyStore } from './components/GiphyStore';
import { GiphyForm } from './components/GiphyForm';
declare let module: any

class App extends React.Component{
  render() {
      return (
      <div id = "App">
        <div><Clock/></div>
        <div><GiphyStore/></div>

      </div>);
  }
};

ReactDOM.render(<App />,
document.getElementById('root'));


if (module.hot) {
  module.hot.accept();
}