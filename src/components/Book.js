import { BookShelfChanger } from './BookShelfChanger';
import React from 'react';

export const Book = props => {
  const { authors, addBook, changeShelf, shelf, id, image, title } = props;
  const book = { authors, id, image, title };
  const imageURL = `url(${image})`;
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
          addBook={addBook}
          book={book}
          bookId={id}
          changeShelf={changeShelf}
          currentShelf={shelf}
        />
      </div>
      <div className="book-title">
        {title}
      </div>
      <div className="book-authors">
        {authors}
      </div>
    </div>
  );
};
