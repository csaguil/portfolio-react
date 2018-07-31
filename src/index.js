import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export default () => {
  <HashRouter>
    <Switch>
      <Route exact path="/App" />
    </Switch>
  </HashRouter>

}
ReactDOM.render(<App />, document.getElementById('root'));
