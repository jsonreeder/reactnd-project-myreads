import React, { Component } from 'react';
import { Bookshelf } from './Bookshelf';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
  state = {
    books: {},
  };

  componentWillReceiveProps(newProps) {
    const { books } = newProps;
    this.storeBooksById(books);
  }

  componentWillMount() {
    const { books } = this.props;
    this.storeBooksById(books);
  }

  storeBooksById(books) {
    if (!books) {
      return;
    }
    const idsToBooks = {};
    books.forEach(b => {
      idsToBooks[b.id] = b;
    });
    this.setState({ books: idsToBooks });
  }

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
            image: book.imageLinks.smallThumbnail,
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
    const bookshelfComponents = [];
    for (let key in bookshelves) {
      const books = bookshelves[key];
      const title = key;
      const component = (
        <Bookshelf
          books={books}
          changeShelf={this.changeShelf}
          key={key}
          title={title}
        />
      );
      bookshelfComponents.push(component);
    }
    return bookshelfComponents;
  }

  changeShelf = (bookId, shelf) => {
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
  };

  render() {
    const { books } = this.state;
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
