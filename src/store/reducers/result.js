import { actionTypes } from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {

  console.log('[REDUCER] Received', action);

  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // return {
      //   ...state,
      //   results: state.results.concat({id: +new Date(), value: action.result}), // Here we are using concat as in the push method it updates values mutably.
      // };

      return updateObject(state, { results: state.results.concat({id: +new Date(), value: action.result}) });
    case actionTypes.DELETE_RESULT:
      // const id = 2; This is a one way of deleting elements from an array immutably.
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      // return {
      //   ...state,
      //   results: newArray,
      // };

      const updatedArray = state.results.filter(result => result.id !== action.resultElementId); // This filter method will return an new array immutably.
      return updateObject(state, { results: updatedArray });

    default:
      return state;
  }
};

export default reducer;
