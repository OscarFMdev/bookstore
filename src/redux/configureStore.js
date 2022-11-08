import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = configureStore({
  reducer: {
    auth: booksReducer,
    category: categoriesReducer,
  },
});

export default rootReducer;
