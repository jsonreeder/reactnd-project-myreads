import React, { Component } from 'react';
import { Bookshelf } from './Bookshelf';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
  assignBooksToShelves(books) {
    const bookshelves = {
      currentlyReading: [],
      read: [],
      wantToRead: [],
    };
    if (!!Object.keys(books).length) {
      for (let id in books) {
        if (books.hasOwnProperty(id)) {
          const book = books[id];
          const simpleBook = {
            authors: book.authors,
            id: book.id,
            image: book.imageLinks && book.imageLinks.smallThumbnail,
            shelf: book.shelf,
            title: book.title,
          };
          bookshelves[book.shelf].push(simpleBook);
        }
      }
    }

    return bookshelves;
  }

  prepareBookshelfComponents(bookshelves) {
    const { changeShelf } = this.props;
    const bookshelfComponents = [];
    for (let key in bookshelves) {
      const books = bookshelves[key];
      const title = key;
      const component = (
        <Bookshelf
          books={books}
          changeShelf={changeShelf}
          key={key}
          title={title}
        />
      );
      bookshelfComponents.push(component);
    }
    return bookshelfComponents;
  }

  render() {
    const { books } = this.props;
    const bookshelves = this.assignBooksToShelves(books);
    const bookshelfComponents = this.prepareBookshelfComponents(bookshelves);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelfComponents}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
