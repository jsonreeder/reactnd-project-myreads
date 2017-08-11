import { Book } from './Book';
import React from 'react';

const titles = {
  currentlyReading: 'Currently Reading',
  read: 'Read',
  wantToRead: 'Want To Read',
};

export const Bookshelf = props => {
  const { books, changeShelf, title } = props;
  const shelfTitle = titles[title];
  const booksGrid = (
    <ol className="books-grid">
      {books.map((b, i) =>
        <li key={i}>
          <Book
            authors={b.authors}
            changeShelf={changeShelf}
            id={b.id}
            image={b.image}
            shelf={b.shelf}
            title={b.title}
          />
        </li>,
      )}
    </ol>
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {shelfTitle}
      </h2>
      <div className="bookshelf-books">
        {booksGrid}
      </div>
    </div>
  );
};
