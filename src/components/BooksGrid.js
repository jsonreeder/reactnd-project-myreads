import { Book } from './Book';
import React from 'react';

export const BooksGrid = props => {
  const { books, changeShelf, currentBooks } = props;

  const getShelf = (book, currentBooks) => {
    if (book.shelf) {
      return book.shelf;
    }

    const bookInfo = currentBooks[book.id];
    return bookInfo && bookInfo.shelf;
  };

  return (
    <ol className="books-grid">
      {books.map(
        (b, i) =>
          !!b &&
          <li key={i}>
            <Book
              book={b}
              changeShelf={changeShelf}
              shelf={getShelf(b, currentBooks)}
            />
          </li>,
      )}
    </ol>
  );
};
