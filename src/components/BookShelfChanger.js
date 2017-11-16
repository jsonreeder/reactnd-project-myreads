import React from 'react';

export const BookShelfChanger = ({ book, bookId, changeShelf, currentShelf }) =>
  <div className="book-shelf-changer">
    <select
      onChange={e => {
        const shelf = e.target.value;
        return changeShelf(book, shelf);
      }}
    >
      <option value="">Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>;
