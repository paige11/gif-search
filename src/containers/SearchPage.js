import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFormComponent from '../components/SearchFormComponent';
import SearchResultsDisplayComponent from '../components/SearchResultsDisplayComponent';
import { updateSearchTerm, updateSearchResults, getGifsBySearchTerm, makeFavorite } from '../actions/GifsActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.getGifsBySearchTerm(this.props.searchTerm);
  }

  handleChange = e => {
    this.props.updateSearchTerm(e.target.value);
  }

  clearSearch = () => {
    this.props.updateSearchTerm('');
    this.props.updateSearchResults([]);
  }

  render() {
    return (
      <div>
        <Link to="/favorites">Favorites</Link>
        <SearchFormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchTerm={this.props.searchTerm}
          clearSearch={this.clearSearch} //paige
        />
        <SearchResultsDisplayComponent results={this.props.searchResults} makeFavorite={this.props.makeFavorite} />
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

function mapStateToProps(state) {
  return { ...state.gifs };
}

export default connect(mapStateToProps, { updateSearchTerm, getGifsBySearchTerm, makeFavorite, updateSearchResults })(SearchPage);
