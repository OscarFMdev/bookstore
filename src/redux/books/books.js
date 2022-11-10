import { addBookAPI, deleteBookAPI, fetchBooksAPI } from '../../API/bookstoreAPI';
import Types from '../widgets/widgets';

const initialState = [];

const dataToArr = (data) => {
  const array = [];
  Object.keys(data).map((key) => {
    const book = data[key][0];
    book.item_id = key;
    return array.push(book);
  });
  return array;
};

export const getBooks = async (dispatch) => {
  const data = await fetchBooksAPI();
  const dataArr = dataToArr(data);
  dispatch({ type: Types.GET_BOOKS, payload: dataArr });
};

export const addBook = (payload) => async (dispatch) => {
  await addBookAPI(payload);
  dispatch({ type: Types.ADD_BOOK, payload });
};

export const removeBook = (payload) => async (dispatch) => {
  await deleteBookAPI(payload);
  dispatch({ type: Types.REMOVE_BOOK, payload });
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_BOOK:
      return [...state, action.payload];
    case Types.REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case Types.GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
