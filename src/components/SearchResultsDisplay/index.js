import React from 'react';
import PropTypes from 'prop-types';
import '../MultiDisplayComponent.scss';
import GifDisplay from '../GifDisplay';
import Segment from '../Segment';

const SearchResultsDisplay = ({ results, makeFavorite, currentFavoriteFunction }) => (
  <Segment>
    <h3 className="title">Search Results</h3>
    <p>Click on a GIF to add it to your stash.</p>
    <div className="gifs-container">
      {results.map(r => {
          return (
            <GifDisplay
              url={r.fixedHeightUrl}
              description={r.description}
              key={r.id}
              id={r.id}
              currentFavoriteFunction={currentFavoriteFunction}
              onClickFunction={makeFavorite}
              displayingFavorites={false}
            />
          );
        }
      )}
    </div>
  </Segment>
);

SearchResultsDisplay.propTypes = {
  results: PropTypes.array.isRequired,
  makeFavorite: PropTypes.func.isRequired
}

export default SearchResultsDisplay;
