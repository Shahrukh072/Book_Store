import React, { useState } from 'react';
import '../styles/tailwind.css';
import '../styles/searchbar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search functionality here
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="container mx-auto mt-6">
      <form onSubmit={handleSearchSubmit} className="search-form flex items-center">
        <input
          type="text"
          placeholder="Search for books..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="search-button"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
