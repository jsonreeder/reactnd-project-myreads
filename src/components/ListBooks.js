import { Bookshelf } from './Bookshelf';
import { Link } from 'react-router-dom';
import React from 'react';

const books = [
  {
    authors: ['Harper Lee'],
    backgroundImage: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
    height: 193,
    title: 'To Kill a Mockingbird',
    width: 128,
  },
  {
    authors: ['Harper Lee'],
    backgroundImage: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
    height: 193,
    title: 'To Kill a Mockingbird',
    width: 128,
  },
];

const bookshelves = [
  {
    books,
    title: 'Currently Reading',
  },
  {
    books,
    title: 'Want to Read',
  },
  {
    books,
    title: 'Read',
  },
];

export const ListBooks = () => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        {bookshelves.map(((b, i) => <Bookshelf books={b.books} key={i} title={b.title} />))}
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);
