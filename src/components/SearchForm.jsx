import { useContext } from 'react';
import { SearchContext } from '../SearchContext';

import React from 'react';
import { SearchFormContainer } from './SearchForm.styles';

function SearchForm() {
  const {
    searchTerm,
    setSearchTerm,
    searchInternet,
    setCurrentPage,
    setLastSearchTerm,
  } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 2) {
      setCurrentPage(1);
      searchInternet();
      setLastSearchTerm(searchTerm);
    }
  };

  return (
    <SearchFormContainer>
      <form onSubmit={handleSubmit} className="search-form">
        <h1>Haldoon</h1>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </div>
      </form>
    </SearchFormContainer>
  );
}

export default SearchForm;
