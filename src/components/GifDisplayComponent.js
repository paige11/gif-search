import React from 'react';

const GifDisplayComponent = ({ url, description }) => (
  <img src={url} alt={description} />
);

export default GifDisplayComponent;
