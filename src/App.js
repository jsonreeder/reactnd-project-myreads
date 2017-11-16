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

  addBook(book) {
    const { books } = this.state;
    this.setState({ boooks: { ...books, book } });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks books={books} />} />
        <Route
          books={books}
          path="/search"
          render={() => <SearchPage addBook={() => this.addBook()} />}
        />
      </div>
    );
  }
}

export default BooksApp;
