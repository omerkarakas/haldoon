import styled from 'styled-components';

export const PaginationLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pagination-page-links {
    span,
    a {
      font-size: small;
      text-decoration: none;
      color: #1654b8;
      cursor: pointer;
    }

    .active-page-link {
      color: black;
      font-size: medium;
      cursor: default;
    }
  }

  .pagination-center {
    vertical-align: middle;
  }

  .pagination-img {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
