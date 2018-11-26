import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFormComponent from '../components/SearchFormComponent';
import SearchResultsDisplayComponent from '../components/SearchResultsDisplayComponent';
import { updateSearchTerm, getGifsBySearchTerm, makeFavorite } from '../actions/GifsActions';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.getGifsBySearchTerm(this.props.searchTerm);
  }

  handleChange = e => {
    this.props.updateSearchTerm(e.target.value);
  }

  render() {
    return (
      <div>
        <Link to="/favorites">Favorites</Link>
        <SearchFormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchTerm={this.props.searchTerm}
        />
        <SearchResultsDisplayComponent results={this.props.searchResults} makeFavorite={this.props.makeFavorite} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { ...state.gifs };
}

export default connect(mapStateToProps, { updateSearchTerm, getGifsBySearchTerm, makeFavorite })(SearchPage);
