import { BookShelfChanger } from './BookShelfChanger';
import React from 'react';

export const Book = ({ authors, changeShelf, shelf, id, image, title }) => {
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
