import './App.css';
import * as BooksAPI from './utils/BooksAPI';
import { ListBooks, SearchPage } from './components';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class BooksApp extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
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
