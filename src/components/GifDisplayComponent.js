import React from 'react';
import PropTypes from 'prop-types';

const GifDisplayComponent = ({ url, description, id, onClickFunction, clickText }) => (
  <div>
    <img src={url} alt={description} />
    <p onClick={() => onClickFunction(id)}>{clickText}</p>
  </div>
);

GifDisplayComponent.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func.isRequired,
  clickText: PropTypes.string.isRequired
}

export default GifDisplayComponent;
