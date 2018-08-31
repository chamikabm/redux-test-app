import * as actionTypes from '../actions';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: +new Date(), value: action.result}), // Here we are using concat as in the push method it updates values mutably.
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2; This is a one way of deleting elements from an array immutably.
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      // return {
      //   ...state,
      //   results: newArray,
      // };

      const updatedArray = state.results.filter(result => result.id !== action.resultElementId); // This filter method will return an new array immutably.

      return {
        ...state,
        results: updatedArray,
      };

    default:
      return state;
  }
};

export default reducer;