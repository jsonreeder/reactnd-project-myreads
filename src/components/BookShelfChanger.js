import React from 'react';

export const BookShelfChanger = ({ bookId, changeShelf, currentShelf }) => (
  <div className="book-shelf-changer">
    <select onChange={e => changeShelf(bookId, e.target.value)} value={currentShelf}>
      <option disabled value="none">Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
);
