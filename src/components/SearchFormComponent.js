import React from 'react';

const SearchFormComponent = ({ handleSubmit, handleChange, searchTerm }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" value={searchTerm} onChange={handleChange} />
    <button type="submit">Search</button>
  </form>
);

export default SearchFormComponent;
