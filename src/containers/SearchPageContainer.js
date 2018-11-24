import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchPageComponent from '../components/SearchPageComponent';

class SearchPageContainer extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, null)(SearchPageComponent);
