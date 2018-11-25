import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveGifsByIds, removeFavorite } from '../actions/GifsActions';
import FavoritesDisplayComponent from '../components/FavoritesDisplayComponent';

class FavoritesPage extends Component {
  componentDidMount = () => {
    this.props.retrieveGifsByIds(this.props.favoritesIds);
  }

  render() {
    return (
      <FavoritesDisplayComponent results={this.props.favoriteGifs} removeFavorite={this.props.removeFavorite} />
    )
  }
}

function mapStateToProps(state) {
  return { ...state.gifs };
}

export default connect(mapStateToProps, { retrieveGifsByIds, removeFavorite })(FavoritesPage);
