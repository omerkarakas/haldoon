import React from 'react';

function TopSearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Haldoon</h1>
        <input type="text" />
      </form>
    </div>
  );
}

export default TopSearchForm;
