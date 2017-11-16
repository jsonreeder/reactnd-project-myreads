import React from 'react';

export const BookShelfChanger = ({
  book,
  bookId,
  changeShelf,
  currentShelf,
  removeResult,
}) =>
  <div className="book-shelf-changer">
    <select
      onChange={e => {
        const shelf = e.target.value;
        console.log(currentShelf);
        removeResult(book.id);
        return changeShelf(book, shelf);
      }}
      value={currentShelf}
    >
      <option value="">Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>;
