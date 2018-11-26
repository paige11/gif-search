import React from 'react';
import GifDisplayComponent from './GifDisplayComponent';

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

export default FavoritesDisplayComponent;
