import React from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import Pagination from '../components/Pagination';
import TopInfoSection from '../components/TopInfoSection';
import BottomInfoSection from '../components/BottomInfoSection';

function ResultsPage() {
  return (
    <div className="main-container">
      <SearchForm />
      <TopInfoSection />
      <SearchResults />
      <BottomInfoSection />
      <Pagination />
    </div>
  );
}

export default ResultsPage;
