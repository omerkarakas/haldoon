import React, { useContext } from 'react';
import { SearchContext } from '../SearchContext';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

function Pagination() {
  const { currentPage, setCurrentPage, searchResults } =
    useContext(SearchContext);
  const resultsCount = searchResults.totalCount;
  const pageLinksCount =
    resultsCount / 10 > 10 ? 10 : Math.ceil(resultsCount / 10);

  return (
    <div>
      <GrFormPrevious />
      <span className="pagination-center">Haldooooooon</span>
      <GrFormNext />
      <div className="pagination-page-links">{pageLinksCount} links here</div>
    </div>
  );
}

export default Pagination;
