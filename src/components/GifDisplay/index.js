import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class GifDisplay extends Component {
  state = {
    clickedClass: '',
    previousFavoriteClass: ''
  }

  componentDidMount = () => {
    if (!this.props.favorited) {
      let ok = this.props.isCurrentFavorite(this.props.id) ? 'selected' : '';
      this.setState({ previousFavoriteClass: ok })
    }
  }

  handleClick = () => {
    const { favorited, id } = this.props;
    let conditional = favorited ? 'hidden' : 'selected';
    this.setState({ clickedClass: conditional });
    this.props.onClickFunction(id);
  }

  render() {
    const { url, description, isCurrentFavorite, id } = this.props;

    return (
      <img
        src={url}
        alt={description}
        onClick={() => this.handleClick()}
        className={`gif ${this.state.previousFavoriteClass} ${this.state.clickedClass}`}
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
