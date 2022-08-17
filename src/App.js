import { useContext } from 'react';
import { SearchContext } from './SearchContext';
import Home from './pages/Home';

function App() {
  // const { searchResults } = useContext(SearchContext);
  return <Home />;

  // if (searchResults.length === 0) {
  //   return <HomePage />;
  // } else {
  //   return <ResultsPage />;
  // }
}

export default App;
