import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import SearchPage from './containers/SearchPage';
import FavoritesPage from './containers/FavoritesPage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/(|search)/" component={SearchPage} />
          <Route exact path="/favorites" component={FavoritesPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
