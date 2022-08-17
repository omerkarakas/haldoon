import React, { createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios';
const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [lastSearchTerm, setLastSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchedOnce, setSearchedOnce] = useState(false);

  const searchInternet = async (term) => {
    if (term.length > 2) {
      console.log('search for : ', term);

      setLoading(true);
      setSearchResults(null);

      const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
        params: {
          q: term,
          pageNumber: currentPage.toString(),
          pageSize: '10',
          autoCorrect: 'true',
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          //console.log(response.data);
          setSearchResults(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
        });

      setLastSearchTerm(searchTerm);
      setSearchTerm(term);
      setSearchedOnce(true);
    } else {
      console.log('at least three characters required');
    }
  };

  useEffect(() => {
    console.log('ue', 'cp', currentPage);
    searchInternet(searchTerm);
  }, [currentPage]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        searchInternet,
        currentPage,
        setCurrentPage,
        lastSearchTerm,
        setLastSearchTerm,
        loading,
        searchedOnce,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };
