import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ShowGifPage extends Component {
  render() {
    return (
      <Link to="/">
        Go back
      </Link>
    )
  }
}

function mapStateToProps(state) {
  return { ...state.gifs };
}

export default connect(mapStateToProps)(ShowGifPage);
