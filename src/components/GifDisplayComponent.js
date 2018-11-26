import React from 'react';
import './GifDisplayComponent.css';

const GifDisplayComponent = ({ url, description, id, onClickFunction, clickText }) => (
  <div>
    <img src={url} alt={description} />
    <p onClick={() => onClickFunction(id)}>{clickText}</p>
  </div>
);

export default GifDisplayComponent;
