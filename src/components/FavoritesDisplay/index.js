import React from 'react';
import PropTypes from 'prop-types';
import '../MultiDisplayComponent.scss';
import GifDisplay from '../GifDisplay';
import Segment from '../Segment';

const FavoritesDisplay = ({ results, removeFavorite }) => {
  return <Segment>
    <h3 className="title">Your GIFs</h3>
    <p>Click on a GIF to remove it from your stash.</p>
    <div className="gifs-container">
      {results.map(r => {
          return (
            <GifDisplay
              url={r.fixedHeightUrl}
              description={r.description}
              key={r.id}
              id={r.id}
              onClickFunction={removeFavorite}
              displayingFavorites={true}
            />
          );
        }
      )}
    </div>
  </Segment>
}

FavoritesDisplay.propTypes = {
  results: PropTypes.array.isRequired
}

export default FavoritesDisplay;
