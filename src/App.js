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
    console.log('books', books);
    this.storeBooksById(books);
  }

  storeBooksById(books) {
    if (!books.length) {
      return;
    }
    const idsToBooks = {};
    books.forEach(b => {
      idsToBooks[b.id] = b;
    });
    this.setState({ books: idsToBooks });
  }

  addBook(book, shelf) {
    const { books } = this.state;
    const newBook = { ...book, shelf };
    this.setState({ books: [...books, newBook] });
    BooksAPI.update(book, shelf);
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks books={books} />} />
        <Route
          path="/search"
          render={() =>
            <SearchPage
              addBook={(book, shelf) => this.addBook(book, shelf)}
              currentBooks={books}
            />}
        />
      </div>
    );
  }
}

export default BooksApp;
