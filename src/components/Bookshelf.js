import { Book } from './Book';
import React from 'react';

export const Bookshelf = (props) => {
  const { books, title } = props;
  const booksGrid = (
    <ol className="books-grid">
      {books.map((_, i) => <li key={i}><Book /></li>)}
    </ol>
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        {booksGrid}
      </div>
    </div>
  );
};
