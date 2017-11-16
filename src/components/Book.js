import { BookShelfChanger } from './BookShelfChanger';
import React from 'react';

export const Book = props => {
  const { book, changeShelf, shelf } = props;
  const imageURL = `url(${book.image})`;
  const bookStyle = {
    backgroundImage: imageURL,
    height: 193,
    width: 128,
  };

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={bookStyle} />
        <BookShelfChanger
          book={book}
          bookId={book.id}
          changeShelf={changeShelf}
          currentShelf={shelf}
        />
      </div>
      <div className="book-title">
        {book.title}
      </div>
      <div className="book-authors">
        {book.authors}
      </div>
    </div>
  );
};
