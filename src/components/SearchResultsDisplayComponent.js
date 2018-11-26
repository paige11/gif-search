import React from 'react';
import GifDisplayComponent from './GifDisplayComponent';

const SearchResultsDisplayComponent = ({ results, makeFavorite }) => {
  return <div>
    {results.map(r => {
        return <GifDisplayComponent
          url={r.fixedWidthUrl}
          description={r.description}
          key={r.id} id={r.id}
          onClickFunction={makeFavorite}
          clickText="Stash"
        />
      }
    )}
  </div>
}

export default SearchResultsDisplayComponent;
