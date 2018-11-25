import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFormComponent from '../components/SearchFormComponent';
import SearchResultsDisplayComponent from '../components/SearchResultsDisplayComponent';
import { getGifs, makeFavorite } from '../actions/GifsActions';

class SearchPage extends Component {
  state = {
    searchTerm: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.getGifs(this.state.searchTerm);
  }

  handleChange = e => {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    return (
      <div>
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

export default connect(mapStateToProps, { getGifs, makeFavorite })(SearchPage);
