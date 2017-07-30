import './App.css';
import { Link, Route } from 'react-router-dom';
import React from 'react';

const SearchPage = () => (
  <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author"/>
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid"></ol>
    </div>
  </div>
);

const BookShelfChanger = () => (
  <div className="book-shelf-changer">
    <select>
      <option value="none" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
);

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

const Book = () => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
      <BookShelfChanger />
    </div>
    <div className="book-title">To Kill a Mockingbird</div>
    <div className="book-authors">Harper Lee</div>
  </div>
);

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

const Bookshelf = (props) => {
  const { books, title } = props;
  const booksGrid = (
    <ol className="books-grid">
      {books.map((_, i) => <li key={i}><Book /></li>)}
    </ol>
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        {booksGrid}
      </div>
    </div>
  );
};

const ListBooks = () => (
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

const BooksApp = () => (
  <div className="app">
    <Route exact path="/" component={ListBooks} />
    <Route path="/search" component={SearchPage} />
  </div>
);

export default BooksApp;
