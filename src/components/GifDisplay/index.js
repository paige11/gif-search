import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class GifDisplay extends Component {
  state = {
    clickedClass: '',
    favoritedClass: ''
  }

  componentDidMount = () => {
    if (!this.props.displayingFavorites) {
      let cl = this.props.currentFavoriteFunction(this.props.id) ? 'selected' : '';
      this.setState({ favoritedClass: cl });
    }
  }

  handleClick = () => {
    const { displayingFavorites, id } = this.props;
    let conditional = displayingFavorites ? 'hidden' : 'selected';
    this.setState({ clickedClass: conditional });
    this.props.onClickFunction(id);
  }

  render() {
    const { url, description } = this.props;

    return (
      <img
        src={url}
        alt={description}
        onClick={() => this.handleClick()}
        className={`gif ${this.state.favoritedClass} ${this.state.clickedClass}`}
      />
    )
  }
}

GifDisplay.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func
}

export default GifDisplay;
