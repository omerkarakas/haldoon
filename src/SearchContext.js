import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [lastSearchTerm, setLastSearchTerm] = useState('');

  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useState({
    q: '',
    pageNumber: '1',
    pageSize: '10',
    autoCorrect: 'true',
  });
  const [currentPage, setCurrentPage] = useState(1);

  const searchInternet = () => {
    const options = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
      params: searchParams,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
      },
    };

    if (searchTerm.length > 2) {
      console.log('search...');
      setLastSearchTerm(searchTerm);

      axios
        .request(options)
        .then(function (response) {
          //console.log(response.data);
          setSearchResults(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    console.log('ue', 'st', searchTerm);
    setSearchParams({
      q: searchTerm,
      pageNumber: currentPage.toString(),
      pageSize: '10',
      autoCorrect: 'true',
    });
  }, [searchTerm]);

  useEffect(() => {
    console.log('ue', 'cp', currentPage);
    setSearchParams({
      q: searchTerm,
      pageNumber: currentPage.toString(),
      pageSize: '10',
      autoCorrect: 'true',
    });
    searchInternet();
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };
