import Types from '../widgets/widgets';

export const checkStatus = (payload) => ({
  type: Types.CHECK_STATUS,
  payload,
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case Types.CHECK_STATUS:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export default categoriesReducer;
