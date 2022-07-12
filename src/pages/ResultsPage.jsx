import React from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import Pagination from '../components/Pagination';
import TopSearchForm from '../components/TopSearchForm';

function ResultsPage() {
  return (
    <div>
      <SearchForm />
      <SearchResults />
      <Pagination />
    </div>
  );
}

export default ResultsPage;
