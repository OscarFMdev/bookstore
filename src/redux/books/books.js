import Types from '../widgets/widgets';

export const addBook = (payload) => ({
  type: Types.ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: Types.REMOVE_BOOK,
  payload,
});

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_BOOK:
      return [...state, action.payload];
    case Types.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
