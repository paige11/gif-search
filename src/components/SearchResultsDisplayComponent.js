import React from 'react';
import GifDisplayComponent from './GifDisplayComponent';
import PropTypes from 'prop-types';

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

SearchResultsDisplayComponent.propTypes = {
  results: PropTypes.array.required,
  makeFavorite: PropTypes.func.required
}

export default SearchResultsDisplayComponent;
