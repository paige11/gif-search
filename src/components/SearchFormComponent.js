import React from 'react';
import PropTypes from 'prop-types';

const SearchFormComponent = ({ handleSubmit, handleChange, searchTerm }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" value={searchTerm} onChange={handleChange} />
    <button type="submit">Search</button>
  </form>
);

SearchFormComponent.propTypes = {
  handleSubmit: PropTypes.func.required,
  handleChange: PropTypes.func.required,
  searchTerm: PropTypes.string.required
}

export default SearchFormComponent;
