import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeGifDisplayObjects } from '../utils/GifDisplayFunctions';
import { getGifsByIds } from '../apis/GiphyRequests';
import { removeFavorite } from '../actions/GifsActions';
import FavoritesDisplay from '../components/FavoritesDisplay';
import Loading from '../components/Loading';

class FavoritesPage extends Component {
  state = {
    favorites: [],
    loading: false
  }

  componentDidMount = () => {
    if (this.props.favoritesIds.length) {
      this.setState({ loading: true });
      getGifsByIds(this.props.favoritesIds)
        .then(
          res => {
            this.setState({
              favorites: makeGifDisplayObjects(res.data.data),
              loading: false
            });
          },
          err => console.log(err)
        );
    }
  }

  render() {
    const { loading, favorites } = this.state;

    if (loading) {
      return <Loading />
    }
    if (!loading && favorites) {
      return (
        <FavoritesDisplay
          results={favorites}
          removeFavorite={this.props.removeFavorite}
        />
      );
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
