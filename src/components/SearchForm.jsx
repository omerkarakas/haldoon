import { useContext } from 'react';
import { SearchContext } from '../SearchContext';

import React, { Component } from 'react';
import { SearchFormContainer } from './SearchForm.styles';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function SearchForm() {
  const {
    searchTerm,
    setSearchTerm,
    searchInternet,
    setCurrentPage,
    setLastSearchTerm,
  } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submit');
    if (searchTerm.length > 2) {
      setCurrentPage(1);
      searchInternet(searchTerm);
    }
  };

  const submitForm = () => {
    this.formRef.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true })
    );
  };

  return (
    <SearchFormContainer>
      <img src="haldoon.png" alt="Khaldun" className="img-khaldun" />
      <form onSubmit={handleSubmit} className="search-form" id="search-form">
        <div className="search-form">
          <Input
            placeholder="What are you searching?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="large"
          />

          <Button
            type="primary"
            htmlType="submit"
            icon={<SearchOutlined />}
            onCLicked={(e) => handleSubmit()}
            size="large"
          >
            Search
          </Button>
        </div>
      </form>
    </SearchFormContainer>
  );
}

export default SearchForm;
