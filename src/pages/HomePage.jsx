import React from 'react';
import SearchForm from '../components/SearchForm';

function HomePage() {
  return (
    <div className="center-container">
      <img src="ibnKhaldun.png" alt="Ibn Khaldun" className="img-khaldun" />
      <SearchForm />
    </div>
  );
}

export default HomePage;
