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

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks books={books} />} />
        <Route path="/search" component={SearchPage} />
      </div>
    );
  }
}

export default BooksApp;
