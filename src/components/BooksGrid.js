import { Book } from './Book';
import React from 'react';

export const BooksGrid = props => {
  const { books, changeShelf, removeResult } = props;
  return (
    <ol className="books-grid">
      {books.map((b, i) =>
        <li key={i}>
          <Book
            authors={b.authors}
            changeShelf={changeShelf}
            id={b.id}
            image={b.image}
            removeResult={removeResult}
            shelf={b.shelf}
            title={b.title}
          />
        </li>,
      )}
    </ol>
  );
};
