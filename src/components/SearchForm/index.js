import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Segment from '../Segment';

const SearchForm = ({ handleSubmit, handleChange, searchTerm }) => (
  <Segment>
    <h3 className="title">Search for GIFs</h3>
    <p>Enter a term to search for GIFs. Click on a GIF to add it to your stash.</p>
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="cta">Search</button>
    </form>
  </Segment>
);

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
}

export default SearchForm;
