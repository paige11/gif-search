import React from 'react';
import GifDisplayComponent from './GifDisplayComponent';
import PropTypes from 'prop-types';

const SearchResultsDisplayComponent = ({ results, makeFavorite }) => (
  <div>
    {results.map(r => {
        return (
          <GifDisplayComponent
            url={r.fixedWidthUrl}
            description={r.description}
            key={r.id} id={r.id}
            onClickFunction={makeFavorite}
            clickText="Stash"
          />
        )
      }
    )}
  </div>
);

SearchResultsDisplayComponent.propTypes = {
  results: PropTypes.array.isRequired,
  makeFavorite: PropTypes.func.isRequired
}

export default SearchResultsDisplayComponent;
