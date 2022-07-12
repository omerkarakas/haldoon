import React, { useContext } from 'react';
import { SearchContext } from '../SearchContext';

function SearchResults() {
  const { searchTerm, searchResults } = useContext(SearchContext);

  return (
    <div>
      <h3>Search Results for "{searchTerm}"</h3>
      <hr />
      {searchResults.value.map((res, index) => {
        return <p>{res.title}</p>;
      })}
    </div>
  );
}

export default SearchResults;
