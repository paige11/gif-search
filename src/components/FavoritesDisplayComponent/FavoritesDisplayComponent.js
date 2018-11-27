import React from 'react';
import GifDisplayComponent from '../GifDisplayComponent/GifDisplayComponent';
import PropTypes from 'prop-types';
import '../MultiDisplayComponent.scss';

const FavoritesDisplayComponent = ({ results, removeFavorite }) => (
  <div>
    <h1>Your GIFs</h1>
    <p>Click on a GIF to remove it from your stash.</p>
    <div className="gifs-container">
      {results.map(r => {
          return (
            <GifDisplayComponent
              url={r.fixedWidthUrl}
              description={r.description}
              key={r.id} id={r.id}
              onClickFunction={removeFavorite}
            />
          )
        }
      )}
    </div>
  </div>
);

FavoritesDisplayComponent.propTypes = {
  results: PropTypes.array.isRequired,
  removeFavorite: PropTypes.func.isRequired
}

export default FavoritesDisplayComponent;
