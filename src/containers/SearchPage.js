import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateSearchTerm, makeFavorite } from '../actions/GifsActions';
import SearchForm from '../components/SearchForm';
import SearchResultsDisplay from '../components/SearchResultsDisplay';
import { getGifsBySearchTerm } from '../apis/GiphyRequests';
import { makeGifDisplayObjects } from '../utils/GifDisplayFunctions';

class SearchPage extends Component {
  state = {
    searchResults: []
  }

  componentDidMount = () => {
    if (this.props.searchTerm) this.searchForGifs();
  }

  searchForGifs = () => {
    getGifsBySearchTerm(this.props.searchTerm)
      .then(
        res => {
          this.setState({ searchResults: makeGifDisplayObjects(res.data.data) });
        },
        err => console.log(err)
      );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.searchForGifs();
  }

  handleChange = e => {
    this.props.updateSearchTerm(e.target.value);
  }

  currentFavoriteFunction = id => {
    return this.props.favoritesIds.indexOf(id) !== -1;
  }

  showIfResults = () => {
    if (this.state.searchResults.length) {
      return (
        <SearchResultsDisplay
          results={this.state.searchResults}
          makeFavorite={this.props.makeFavorite}
          currentFavoriteFunction={this.currentFavoriteFunction}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <SearchForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchTerm={this.props.searchTerm}
        />
        {this.showIfResults()}
      </div>
    )
  }
}

SearchPage.propTypes = {
  makeFavorite: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return { ...state.gifs }
}

export default connect(mapStateToProps, { updateSearchTerm, makeFavorite })(SearchPage);
