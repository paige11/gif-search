import React from 'react';
import GifDisplayComponent from './GifDisplayComponent';
import PropTypes from 'prop-types';

const FavoritesDisplayComponent = ({ results, removeFavorite }) => {
  return <div>
    {results.map(r => {
        return <GifDisplayComponent
          url={r.fixedWidthUrl}
          description={r.description}
          key={r.id} id={r.id}
          onClickFunction={removeFavorite}
          clickText="Remove"
        />
      }
    )}
  </div>
}

FavoritesDisplayComponent.propTypes = {
  results: PropTypes.array.isRequired,
  removeFavorite: PropTypes.func.isRequired
}

export default FavoritesDisplayComponent;
