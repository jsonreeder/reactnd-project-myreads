import { Link } from 'react-router-dom';
import React from 'react';

export const SearchPage = () =>
  <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to="/">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid" />
    </div>
  </div>;
