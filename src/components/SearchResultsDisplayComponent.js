import React from 'react';
import GifDisplayComponent from './GifDisplayComponent';

const SearchResultsDisplayComponent = ({ results }) => (
  <div>
    {results.map(r => {
        return <GifDisplayComponent url={r.fixedWidthUrl} description={r.description} key={r.id} />
      }
    )}
  </div>
)

export default SearchResultsDisplayComponent;
