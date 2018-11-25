import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFormComponent from '../components/SearchFormComponent';
import SearchResultsDisplayComponent from '../components/SearchResultsDisplayComponent';
import { getGifsBySearchTerm, makeFavorite } from '../actions/GifsActions';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
  state = {
    searchTerm: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.getGifsBySearchTerm(this.state.searchTerm);
  }

  handleChange = e => {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    return (
      <div>
        <Link to="/favorites">Favorites</Link>
        <SearchFormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchTerm={this.state.searchTerm}
        />
        <SearchResultsDisplayComponent results={this.props.searchResults} makeFavorite={this.props.makeFavorite} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { ...state.gifs };
}

export default connect(mapStateToProps, { getGifsBySearchTerm, makeFavorite })(SearchPage);
