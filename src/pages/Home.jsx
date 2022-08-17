import React, { useContext } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import Pagination from '../components/Pagination';
import TopInfoSection from '../components/TopInfoSection';
import BottomInfoSection from '../components/BottomInfoSection';
import { SearchContext } from '../SearchContext';
import Loading from '../components/Loading';

function Home() {
  const { searchedOnce, searchTerm, loading, searchResults } =
    useContext(SearchContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="main-container">
      {/* {!searchedOnce && (
        <img src="haldoon.png" alt="Khaldun" className="img-khaldun" />
      )} */}

      <SearchForm />
      {searchedOnce && searchResults && (
        <div>
          <TopInfoSection term={searchTerm} />
          <SearchResults />
          <BottomInfoSection />
          <Pagination />
        </div>
      )}
    </div>
  );
}

export default Home;
