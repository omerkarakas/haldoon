import { useContext, useEffect, useState } from 'react';
import { SearchContext } from './SearchContext';
import { call } from './util/webapi';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_HOST = process.env.REACT_APP_API_HOST;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_HOST,
  },
};

function App() {
  const [data, setData] = useState({});
  const { searchTerm, searchResults } = useContext(SearchContext);

  console.log(searchTerm);

  const callAPI = async () => {
    try {
      const response = await fetch(
        'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true',
        options
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //    callAPI();
  }, []);

  if (searchResults.length === 0) return <HomePage />;
  else return <ResultsPage />;
}

export default App;
