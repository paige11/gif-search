import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import SearchResultsDisplay from '../components/SearchResultsDisplay';
import {
  updateSearchTerm,
  updateSearchResults,
  getGifsBySearchTerm,
  makeFavorite
} from '../actions/GifsActions';
import PropTypes from 'prop-types';

class SearchPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.getGifsBySearchTerm(this.props.searchTerm);
  }

  handleChange = e => {
    this.props.updateSearchTerm(e.target.value);
  }

  showIfResults = () => {
    if (this.props.searchResults.length) {
      return (
        <SearchResultsDisplay
          results={this.props.searchResults}
          makeFavorite={this.props.makeFavorite}
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
  getGifsBySearchTerm: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchResults: PropTypes.array.isRequired,
  makeFavorite: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return { ...state.gifs }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSearchTerm: term => dispatch(updateSearchTerm(term)),
    updateSearchResults: results => dispatch(updateSearchResults(results)),
    getGifsBySearchTerm: term => dispatch(getGifsBySearchTerm(term)),
    makeFavorite: id => dispatch(makeFavorite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
