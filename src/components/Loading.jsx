import React from 'react';

const Loading = () => {
  // return <div className="loader">Loading...</div>;
  return (
    <div className="main-container">
      <img src="haldoon.png" alt="Khaldun" className="img-khaldun" />

      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
