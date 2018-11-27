import React from 'react';
import PropTypes from 'prop-types';
import './GifDisplayComponent.scss';

const GifDisplayComponent = ({ url, description, id, onClickFunction }) => (
    <img
      src={url}
      alt={description}
      onClick={() => onClickFunction(id)}
      className="gif"
    />
);

GifDisplayComponent.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func.isRequired
}

export default GifDisplayComponent;
