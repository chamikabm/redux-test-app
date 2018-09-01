import { actionTypes } from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {

  console.log('[REDUCER - COUNTER] Received', action);

  switch (action.type) {
    case actionTypes.INCREMENT:
      // const newState = Object.assign({}, state); // One way of updating state immutably.
      // newState.counter = state.counter + 1;
      // return newState;
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      // return {
      //   ...state,  // Second way of updating state immutably.
      //   counter: state.counter - 1,
      // };
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.val });
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.val });

    default:
      return state;
  }
};

export default reducer;
