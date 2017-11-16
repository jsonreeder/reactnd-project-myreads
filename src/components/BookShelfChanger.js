import React from 'react';

export const BookShelfChanger = ({
  addBook,
  book,
  bookId,
  changeShelf,
  currentShelf,
}) =>
  <div className="book-shelf-changer">
    <select
      onChange={e => {
        const shelf = e.target.value;
        const newBook = { ...book, shelf };
        return addBook(newBook);
      }}
      value={currentShelf}
    >
      <option disabled value="none">
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>;
