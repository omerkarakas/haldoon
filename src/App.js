import { useContext } from 'react';
import { SearchContext } from './SearchContext';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';

function App() {
  const { searchResults } = useContext(SearchContext);

  //useEffect(() => {}, []);

  if (searchResults.length === 0) return <HomePage />;
  else return <ResultsPage />;
}

export default App;
