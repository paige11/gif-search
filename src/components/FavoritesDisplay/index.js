import React from 'react';
import PropTypes from 'prop-types';
import '../MultiDisplayComponent.scss';
import GifDisplay from '../GifDisplay';

const FavoritesDisplay = ({ results, removeFavorite }) => (
  <div>
    <h1>Your GIFs</h1>
    <div className="gifs-container">
      {results.map(r => {
          return (
            <GifDisplay
              url={r.fixedHeightUrl}
              description={r.description}
              key={r.id}
              id={r.id}
              onClickFunction={removeFavorite}
              favorited={true}
            />
          )
        }
      )}
    </div>
  </div>
);

FavoritesDisplay.propTypes = {
  results: PropTypes.array.isRequired
}

export default FavoritesDisplay;
