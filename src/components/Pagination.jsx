import React, { useContext } from 'react';
import { SearchContext } from '../SearchContext';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { PaginationLinksContainer } from './Pagination.styles';

function Pagination() {
  const { searchTerm, currentPage, setCurrentPage, searchResults } =
    useContext(SearchContext);
  const resultsCount = searchResults.totalCount;
  const pageLinksCount =
    resultsCount / 10 > 10 ? 10 : Math.ceil(resultsCount / 10);
  const showPrevLink = currentPage !== 1;
  const showNextLink =
    searchResults.totalCount > 0 && currentPage !== pageLinksCount;

  let pageNumbers = [];
  for (let i = 1; i <= pageLinksCount; i++) {
    pageNumbers.push(i);
  }

  const navigatePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <PaginationLinksContainer>
      <div>
        {showPrevLink && (
          <GrFormPrevious className="navigation-icon" onClick={prevPage} />
        )}
        {searchResults.totalCount > 0 && (
          <span className="pagination-center">Haldooooooon</span>
        )}
        {showNextLink && (
          <GrFormNext className="navigation-icon" onClick={nextPage} />
        )}
      </div>

      <div className="pagination-page-links">
        {showPrevLink && <span onClick={prevPage}>Previous</span>}

        <span>&nbsp;&nbsp;</span>
        {pageNumbers.map((num) => {
          //return <a href={page}>{page} &nbsp;</a>;
          return (
            <span
              key={num}
              className={`${currentPage === num ? 'active-page-link' : ''}`}
              onClick={() => navigatePage(num)}
            >
              {num}&nbsp;
            </span>
          );
        })}
        <span>&nbsp;&nbsp;</span>

        {showNextLink && <span onClick={nextPage}>Next</span>}
      </div>
    </PaginationLinksContainer>
  );
}

export default Pagination;
