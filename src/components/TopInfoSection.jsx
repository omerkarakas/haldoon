import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../SearchContext';

function TopInfoSection({ term }) {
  const { lastSearchTerm, setSearchTerm, searchResults, searchInternet } =
    useContext(SearchContext);

  if (!searchResults) return '';

  return (
    <>
      <h4>Showing results for {lastSearchTerm}</h4>
      {searchResults.didUMean && (
        <h4>
          Did you mean:{' '}
          <span
            onClick={() => {
              setSearchTerm(searchResults.didUMean);
              searchInternet(searchResults.didUMean);
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
