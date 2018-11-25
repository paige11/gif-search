import React from 'react';
import './GifDisplayComponent.css';
import { Link } from "react-router-dom";

const GifDisplayComponent = ({ url, description, id, onClickFunction, clickText }) => (
  <div>
    <Link to={`/${id}`}>
      <img src={url} alt={description} />
    </Link>
    <p onClick={() => onClickFunction(id)}>{clickText}</p>
  </div>
);

export default GifDisplayComponent;
