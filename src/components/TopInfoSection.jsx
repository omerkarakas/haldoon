import React, { useContext } from 'react';
import { SearchContext } from '../SearchContext';

function TopInfoSection() {
  const { searchTerm, setSearchTerm, searchResults, searchInternet } =
    useContext(SearchContext);

  return (
    <>
      <h4>Showing results for {searchTerm}</h4>
      {searchResults.didUMean && (
        <h4>
          Did you mean:{' '}
          <span
            onClick={() => {
              setSearchTerm(searchResults.didUMean);
              searchInternet();
            }}
            className="did-you-mean"
          >
            {searchResults.didUMean}
          </span>
        </h4>
      )}
    </>
  );
}

export default TopInfoSection;
