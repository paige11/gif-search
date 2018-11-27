import React from 'react';
import PropTypes from 'prop-types';
import './SearchFormComponent.scss';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const SearchFormComponent = ({ handleSubmit, handleChange, clearSearch, searchTerm }) => (
  <div className="search-form-container">
    <h1>Search for GIFs</h1>
    <p>Enter a term to search for GIFs. Click on a GIF to add it to your stash.</p>
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <div>
        <ButtonComponent text="Clear" type="button" clickFunction={clearSearch} />
        <ButtonComponent text="Submit" type="submit" btnClass="cta" />
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
