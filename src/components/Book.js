import { BookShelfChanger } from './BookShelfChanger';
import React from 'react';

export const Book = props => {
  const { authors, changeShelf, shelf, id, image, title, removeResult } = props;
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
          book={book}
          bookId={id}
          changeShelf={changeShelf}
          currentShelf={shelf}
          removeResult={removeResult}
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
