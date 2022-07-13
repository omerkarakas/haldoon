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
  const { lastSearchTerm, searchResults } = useContext(SearchContext);

  if (searchResults.totalCount === 0) {
    return (
      <>
        <p>Your search - {lastSearchTerm} - did not match any documents.</p>
        <p>Suggestions:</p>
        <ul>
          <li>Make sure that all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>
        </ul>
      </>
    );
  }
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
