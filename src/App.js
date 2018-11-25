import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import SearchPage from './containers/SearchPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
          <Route exact path="/(|search)/" component={SearchPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
