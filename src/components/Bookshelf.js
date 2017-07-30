import { Book } from './Book';
import React from 'react';

export const Bookshelf = (props) => {
  const { books, title } = props;
  console.log(books);
  const booksGrid = (
    <ol className="books-grid">
      {books.map((b, i) => <li key={i}><Book authors={b.authors} title={b.title} image={b.image} /></li>)}
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
