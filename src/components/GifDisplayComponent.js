import React from 'react';
import PropTypes from 'prop-types';

const GifDisplayComponent = ({ url, description, id, onClickFunction, clickText }) => (
  <div>
    <img src={url} alt={description} />
    <p onClick={() => onClickFunction(id)}>{clickText}</p>
  </div>
);

GifDisplayComponent.propTypes = {
  url: PropTypes.string.required,
  description: PropTypes.string.required,
  id: PropTypes.string.required,
  onClickFunction: PropTypes.func.required,
  clickText: PropTypes.string.required
}

export default GifDisplayComponent;
