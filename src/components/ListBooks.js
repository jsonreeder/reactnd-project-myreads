import React, { Component } from 'react';
import { Bookshelf } from './Bookshelf';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
  state = {
    bookshelves: {
      currentlyReading: [],
      read: [],
      wantToRead: [],
    },
  };

  componentWillReceiveProps(newProps) {
    const { books } = newProps;
    this.assignBooksToShelves(books);
  }

  assignBooksToShelves(books) {
    const bookshelves = {
      currentlyReading: [],
      read: [],
      wantToRead: [],
    };

    books.length && books.forEach((book) => {
      const simpleBook = {
        authors: book.authors,
        image: book.imageLinks.smallThumbnail,
        title: book.title,
      };
      bookshelves[book.shelf].push(simpleBook);
    });

    this.setState({ bookshelves });
  }

  prepareBookshelfComponents(bookshelves) {
    const bookshelfComponents = [];
    for (let key in bookshelves) {
      const books = bookshelves[key];
      const title = key;
      const component = <Bookshelf books={books} key={key} title={title} />;
      bookshelfComponents.push(component);
    };
    return bookshelfComponents;
  }

  render() {
    const { bookshelves } = this.state;
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
};

export default ListBooks;
