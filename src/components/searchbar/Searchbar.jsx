import React, { useState } from 'react';

import './Searchbar.scss';

const Searchbar = ({ search }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        placeholder="Search by Launch ID"
        type="text"
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button className="searchbar__button" onClick={() => search(searchText)}>
        SUBMIT
      </button>
    </div>
  );
};

export default Searchbar;
