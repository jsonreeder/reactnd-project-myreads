import './App.css';
import * as BooksAPI from './utils/BooksAPI';
import { ListBooks, SearchPage } from './components';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class BooksApp extends Component {
  state = {
    books: {},
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.storeBooksById(books);
  }

  storeBooksById(books) {
    const idsToBooks = books.reduce((newBooks, b) => {
      newBooks[b.id] = b;
      return newBooks;
    }, {});

    this.setState({ books: idsToBooks });
  }

  addBook = (book, shelf) => {
    const newBook = { [book.id]: { ...book, shelf } };

    this.setState(prevState => {
      const { books } = prevState;
      return { books: { ...books, ...newBook } };
    });
    BooksAPI.update(book, shelf);
  };

  changeShelf = (book, shelf) => {
    const bookId = book.id;
    this.setState(prevState => {
      const fullRecord = prevState.books[bookId];
      fullRecord.shelf = shelf;
      return {
        books: {
          ...prevState.books,
          [bookId]: fullRecord,
        },
      };
    });
    BooksAPI.update(book, shelf);
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() =>
            <ListBooks books={books} changeShelf={this.changeShelf} />}
        />
        <Route
          path="/search"
          render={() =>
            <SearchPage addBook={this.addBook} currentBooks={books} />}
        />
      </div>
    );
  }
}

export default BooksApp;
