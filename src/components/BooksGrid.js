import { Book } from './Book';
import React from 'react';

export const BooksGrid = props => {
  const { books, changeShelf, currentBooks, removeResult } = props;

  const getShelf = (book, currentBooks) => {
    if (book.shelf) {
      return book.shelf;
    }

    const bookInfo = currentBooks.find(b => b.id === book.id);
    return bookInfo && bookInfo.shelf;
  };

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
            shelf={getShelf(b, currentBooks)}
            title={b.title}
          />
        </li>,
      )}
    </ol>
  );
};
