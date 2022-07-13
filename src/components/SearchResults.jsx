import React, { useContext } from 'react';
import { SearchContext } from '../SearchContext';
import parse from 'html-react-parser';

import {
  SearchResult,
  SearchResultsContainer,
  Description,
  Title,
} from './SearchResults.styles';

function SearchResults() {
  const { searchTerm, searchResults } = useContext(SearchContext);

  return (
    <SearchResultsContainer>
      <hr />
      {searchResults.value.map((res, index) => {
        let shortUrl = res.url.slice(0, 50);
        if (res.url.length > 50) {
          shortUrl = shortUrl.slice(0, 47) + '...';
        }
        let desc =
          res.snippet.length > 300
            ? res.snippet.slice(0, 297) + '...'
            : res.snippet;
        return (
          <SearchResult key={index}>
            <a href={res.url}>{shortUrl}</a>
            <a href={res.url}>
              <h3>{res.title}</h3>
            </a>
            <p>{parse(desc)}</p>
          </SearchResult>
        );
      })}
    </SearchResultsContainer>
  );
}

export default SearchResults;
