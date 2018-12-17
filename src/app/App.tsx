import * as ReactDOM from 'react-dom';
import * as React from "react";
import { Clock } from './components/Clock';
import { GiphyStore } from './components/GiphyStore';
import { Login } from './components/Login'
import { UserInfo} from './components/UserInfo';

declare let module: any

class App extends React.Component{
  render() {
      return (
      <div id = "App">
        <div><Login userInfo={UserInfo} /></div>
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