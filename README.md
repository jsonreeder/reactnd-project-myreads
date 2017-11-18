# MyReads

_A React practice project_

I made this project as part of the Udacity React Nanodegree. It is designed after the pattern of `goodreads.com` and allows the following functionality:
- Main page: `/`
  - Has 3 shelves on books
  - Allows users to move books between shelves
- Search page: `/search`
  - As users type into the search field, books that match the query are displayed
  - Books can be added to shelves via dropdown menus
  - After adding a book to a shelf, it appears on that shelf on the main page
  - Any books already saved to shelves have the proper shelf indicated in the dropdown menu

## Technical Notes
- State is passed down from parent to child components
- Functional calls to `setState` are when previous state information is used
- Component lifecycle methods are used to fetch api data, including `componentDidMount` and a callback to `setState`
- The app features basic tests written with `jest`

## Technology used
- React
- React Router
- Jest
- Enzyme
- Prettier (formatting)
- ESLint

## To Run
  - `npm install`
  - `npm start`
