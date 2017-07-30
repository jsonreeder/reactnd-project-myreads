import { BookShelfChanger } from './BookShelfChanger';
import React from 'react';

export const Book = ({ authors, image, title }) => {
  const imageURL = `url(${image})`;
  console.log(imageURL);
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imageURL }}></div>
        <BookShelfChanger />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};
