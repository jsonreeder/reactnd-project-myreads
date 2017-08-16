import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
  state = {
    query: '',
  };

  onChange(e) {
    const query = e.target.value;
    this.setState({ query });
  }

  render() {
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
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default SearchPage;
