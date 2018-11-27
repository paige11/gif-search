import React from 'react';
import PropTypes from 'prop-types';
import './ButtonComponent.scss';

const ButtonComponent = ({ handleSubmit, handleChange, clearSearch, searchTerm }) => (
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

ButtonComponent.propTypes = {

}

export default ButtonComponent;
