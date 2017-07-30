import './App.css';
import { ListBooks, SearchPage } from './components';
import React from 'react';
import { Route } from 'react-router-dom';

const BooksApp = () => (
  <div className="app">
    <Route exact path="/" component={ListBooks} />
    <Route path="/search" component={SearchPage} />
  </div>
);

export default BooksApp;
