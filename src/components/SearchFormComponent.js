import React from 'react';
import PropTypes from 'prop-types';

const SearchFormComponent = ({ handleSubmit, handleChange, clearSearch, searchTerm }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" value={searchTerm} onChange={handleChange} />
    <button type="submit">Search</button>
    <button type="button" onClick={clearSearch}>Clear</button>
  </form>
);

SearchFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
}

export default SearchFormComponent;
