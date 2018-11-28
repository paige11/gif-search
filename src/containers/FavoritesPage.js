import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeGifDisplayObjects } from '../utils/GifDisplayFunctions';
import { getGifsByIds } from '../apis/GiphyRequests';
import { removeFavorite } from '../actions/GifsActions';
import FavoritesDisplay from '../components/FavoritesDisplay';

class FavoritesPage extends Component {
  state = {
    favorites: []
  }

  componentDidMount = () => {
    if (this.props.favoritesIds.length) {
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
    const { favorites } = this.state;

    if (favorites) {
      return (
        <FavoritesDisplay
          results={favorites}
          removeFavorite={this.props.removeFavorite}
        />
      )
    }
  }
}

FavoritesPage.propTypes = {
  favoritesIds: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return { ...state.gifs }
}

export default connect(mapStateToProps, { removeFavorite })(FavoritesPage);
