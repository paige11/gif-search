import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoritesPage extends Component {
  // TODO in constructor, use favorites string to get gifs from GiphyRequests new call
  // TODO can reuse GifDisplayComponent to display favorites (click to show, remove from faves?)

  render() {
    return <h1>hi</h1>
  }
}

function mapStateToProps(state) {
  return { ...state.gifs };
}

export default connect(mapStateToProps)(FavoritesPage);
