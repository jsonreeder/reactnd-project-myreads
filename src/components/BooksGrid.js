import { Book } from './Book';
import React from 'react';

export const BooksGrid = props => {
  const { books, addBook } = props;
  return (
    <ol className="books-grid">
      {books.map((b, i) =>
        <li key={i}>
          <Book
            addBook={addBook}
            authors={b.authors}
            id={b.id}
            image={b.image}
            shelf={b.shelf}
            title={b.title}
          />
        </li>,
      )}
    </ol>
  );
};
