import * as BooksAPI from '../utils/BooksAPI';
import React, { Component } from 'react';
import { BooksGrid } from './BooksGrid';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
  state = {
    books: [],
    query: '',
  };

  onChange(e) {
    const query = e.target.value;
    this.setState({ query }, () => this.fetchBooks(this.state.query));
  }

  async fetchBooks(query) {
    const books = !!query ? await BooksAPI.search(query) : [];
    this.setState({ books });
  }

  render() {
    const { books, query } = this.state;
    const { addBook, currentBooks } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={e => this.onChange(e)}
              placeholder="Search by title or author"
              type="text"
              value={query}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid
            books={books}
            changeShelf={addBook}
            currentBooks={currentBooks}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
