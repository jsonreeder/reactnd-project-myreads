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
    this.setState({ query });
    query &&
      BooksAPI.search(query, 4).then(books => {
        const simpleBooks = this.simplifyBooks(books);
        this.setState({ books: simpleBooks });
      });
  }

  simplifyBooks(books) {
    if (!!books && !books.hasOwnProperty('error')) {
      return books.map(book => ({
        authors: book.authors,
        id: book.id,
        image: book.imageLinks && book.imageLinks.smallThumbnail,
        shelf: book.shelf,
        title: book.title,
      }));
    } else {
      return [];
    }
  }

  removeResult(bookId) {
    this.setState(state => ({
      books: state.books.filter(b => b.id !== bookId),
    }));
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
            removeResult={bookId => this.removeResult(bookId)}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
