import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const SearchContext = createContext();

const options = {
  method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
  params: {
    q: 'taylor swift',
    pageNumber: '1',
    pageSize: '10',
    autoCorrect: 'true',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY, //'e07be56456mshf22303d5e1869e9p14a1ddjsn7f855e593011',
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST, //'contextualwebsearch-websearch-v1.p.rapidapi.com',
  },
};

const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('merhaba');
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const searchInternet = () => {
    options.params = searchParams;
    axios
      .request(options)
      .then(function (response) {
        //console.log(response.data);
        setSearchResults(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    setSearchParams({
      q: searchTerm,
      pageNumber: '1',
      pageSize: '10',
      autoCorrect: 'true',
    });
  }, [searchTerm]);

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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };
