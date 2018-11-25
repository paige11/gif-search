import React from 'react';
import './GifDisplayComponent.css';
import { Link } from "react-router-dom";

const GifDisplayComponent = ({ url, description, id, makeFavorite }) => (
  <div>
    <Link to={`/${id}`}>
      <img src={url} alt={description} />
    </Link>
    <p onClick={() => makeFavorite(id)}>Stash</p>
  </div>
);

export default GifDisplayComponent;
