import React, { useState } from 'react';
import '../styles/SearchFilter.css';

const SearchFilter = ({ onSearch, onFilter }) => {
  const [searchText, setSearchText] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterValue(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search invoices..."
        value={searchText}
        onChange={handleSearch}
        className="search-input"
      />
      <select
        value={filterValue}
        onChange={handleFilter}
        className="filter-select"
      >
        <option value="">All</option>
        <option value="paid">Paid</option>
        <option value="unpaid">Unpaid</option>
      </select>
    </div>
  );
};

export default SearchFilter;
