import { useContext } from 'react';
import { SearchContext } from '../SearchContext';

import React from 'react';

function SearchForm() {
  const { searchTerm, setSearchTerm, searchInternet } =
    useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 2) {
      searchInternet();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Haldoon</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
