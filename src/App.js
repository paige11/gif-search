import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchPage from './containers/SearchPage';
import FavoritesPage from './containers/FavoritesPage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="screen">
          <Switch>
            <Route exact path="/(|search)/" component={SearchPage} />
            <Route exact path="/your-gif-stash" component={FavoritesPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
