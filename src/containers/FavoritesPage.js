import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/GifsActions';
import FavoritesDisplayComponent from '../components/FavoritesDisplayComponent';
import { makeGifDisplayObjects } from '../utils/GifDisplayFunctions';
import { getGifsByIds } from '../apis/GiphyRequests';

class FavoritesPage extends Component {
  state = {
    favorites: []
  }

  componentDidMount = () => {
    if (this.props.favoritesIds) {
      getGifsByIds(this.props.favoritesIds)
        .then(
          res => {
            this.setState({ favorites: makeGifDisplayObjects(res.data.data) });
          },
          err => console.log(err)
        );
    }
  }

  render() {
    if (this.state.favorites) {
      return (
        <FavoritesDisplayComponent results={this.state.favorites} removeFavorite={this.props.removeFavorite} />
      )
    }
  }
}

function mapStateToProps(state) {
  return { ...state.gifs };
}

export default connect(mapStateToProps, { removeFavorite })(FavoritesPage);