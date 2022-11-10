import { createAsyncThunk } from '@reduxjs/toolkit';
import Types from '../widgets/widgets';

const initialState = [];

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tAB8SosTtsDw2NxkYEWP/books/';

export const addBook = createAsyncThunk(Types.ADD_BOOK, async (obj) => {
  await fetch(url,
    {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
  return obj;
});

export const getBooks = createAsyncThunk(Types.GET_BOOKS, async () => {
  const response = await fetch(url,
    {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
      },
    });
  const result = await response.json();
  return result;
});

export const removeBook = createAsyncThunk(Types.REMOVE_BOOK, async (id) => {
  const urlId = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tAB8SosTtsDw2NxkYEWP/books/${id}`;
  await fetch(urlId,
    {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: id }),
    });
  return id;
});

const booksReducer = (state = initialState, action) => {
  const list = [];
  switch (action.type) {
    case `${Types.GET_BOOKS}/fulfilled`:
      Object.keys(action.payload).forEach((element) => {
        const book = action.payload[element][0];
        book.item_id = element;
        list.push(book);
      });
      return list;
    case `${Types.ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${Types.REMOVE_BOOK}/fulfilled`:
      return state.filter((item) => item.item_id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
