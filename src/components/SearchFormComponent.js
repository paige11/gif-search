import React from 'react';
import PropTypes from 'prop-types';
import './SearchFormComponent.scss';

const SearchFormComponent = ({ handleSubmit, handleChange, clearSearch, searchTerm }) => (
  <div className="search-form-container">
    <h1>Search for GIFs</h1>
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <div>
        <button type="submit">Search</button>
        <button type="button" onClick={clearSearch}>Clear</button>
      </div>
    </form>
  </div>
);

SearchFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
}

export default SearchFormComponent;
