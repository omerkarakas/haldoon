import React, { useContext } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import Pagination from '../components/Pagination';
import TopInfoSection from '../components/TopInfoSection';
import BottomInfoSection from '../components/BottomInfoSection';
import { SearchContext } from '../SearchContext';

function ResultsPage() {
  const { searchTerm } = useContext(SearchContext);

  return (
    <div className="main-container">
      <SearchForm />
      <TopInfoSection term={searchTerm} />
      <SearchResults />
      <BottomInfoSection />
      <Pagination />
    </div>
  );
}

export default ResultsPage;
