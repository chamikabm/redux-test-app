import { actionTypes } from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

// Some developers find this is very cleaner as the reducer switch case is more cleaner.
const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => result.id !== action.resultElementId); // This filter method will return an new array immutably.
  return updateObject(state, { results: updatedArray });
}
;
const reducer = (state = initialState, action) => {

  console.log('[REDUCER - RESULT] Received', action);

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

      return deleteResult(state, action);

    default:
      return state;
  }
};

export default reducer;
