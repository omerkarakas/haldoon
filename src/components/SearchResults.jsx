import React, { useContext } from 'react';
import { SearchContext } from '../SearchContext';
import parse from 'html-react-parser';
import Loading from './Loading';
import { Card } from 'antd';

import { SearchResultsContainer } from './SearchResults.styles';

function SearchResults() {
  const { lastSearchTerm, searchResults, loading } = useContext(SearchContext);

  if (loading) {
    return <Loading />;
  }

  if (searchResults)
    if (searchResults.value?.length === 0) {
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
      {searchResults &&
        searchResults.value.map((res, index) => {
          let shortUrl = res.url.slice(0, 50);
          if (res.url.length > 50) {
            shortUrl = shortUrl.slice(0, 47) + '...';
          }
          let desc =
            res.snippet.length > 400
              ? res.snippet.slice(0, 397) + '...'
              : res.snippet;
          return (
            // <SearchResult key={index}>
            <Card style={{ width: '100%', padding: '2px' }} key={index}>
              <a href={res.url} target="_blank" rel="noreferrer">
                {shortUrl}
              </a>
              <a href={res.url} target="_blank" rel="noreferrer">
                <h3>{res.title}</h3>
              </a>
              <p>{parse(desc)}</p>
            </Card>
          );
        })}
    </SearchResultsContainer>
  );
}

export default SearchResults;
