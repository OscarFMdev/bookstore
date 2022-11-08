import Types from '../widgets/widgets';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case Types.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default categoriesReducer;
