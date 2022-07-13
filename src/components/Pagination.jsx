import React, { useContext } from 'react';
import { SearchContext } from '../SearchContext';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { PaginationLinksContainer } from './Pagination.styles';
import { NoAccounts } from '@mui/icons-material';

function Pagination() {
  const { currentPage, setCurrentPage, searchResults } =
    useContext(SearchContext);
  const resultsCount = searchResults.totalCount;
  const pageLinksCount =
    resultsCount / 10 > 10 ? 10 : Math.ceil(resultsCount / 10);
  const showPrevLink = currentPage !== 1;
  const showNextLink = currentPage !== pageLinksCount;

  let pageNumbers = [];
  for (let i = 1; i <= pageLinksCount; i++) {
    pageNumbers.push(i);
  }

  const navigatePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PaginationLinksContainer>
      <div>
        {showPrevLink && <GrFormPrevious className="navigation-icon" />}
        <span className="pagination-center">Haldooooooon</span>
        {showNextLink && <GrFormNext className="navigation-icon" />}
      </div>

      <div className="pagination-page-links">
        {showPrevLink && <a href="prev">Previous</a>}

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

        {showNextLink && <a href="Next">Next</a>}
      </div>
    </PaginationLinksContainer>
  );
}

export default Pagination;
