import React from 'react';
import GifDisplayComponent from '../GifDisplayComponent/GifDisplayComponent';
import PropTypes from 'prop-types';
import '../MultiDisplayComponent.scss';

const SearchResultsDisplayComponent = ({ results, makeFavorite }) => (
  <div className="gifs-container">
    {results.map(r => {
        return (
          <GifDisplayComponent
            url={r.fixedWidthUrl}
            description={r.description}
            key={r.id} id={r.id}
            onClickFunction={makeFavorite}
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
