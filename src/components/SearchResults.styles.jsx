import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SearchResult = styled.div`
  margin-top: 10px;

  h3 {
    font-weight: bold;
    margin-top: 2px;
    margin-bottom: 3px;
    font-size: 20px;
    text-transform: uppercase;
    color: #1654b8;
  }

  p {
    font-size: small;
    margin-top: 5px;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: small;
  }
`;

export const Description = styled.span`
  font-size: 18px;
  margin: 10px auto;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 5px;
  cursor: pointer;
`;
