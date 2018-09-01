import { actionTypes } from '../actions/actionTypes';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state); // One way of updating state immutably.
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        ...state,  // Second way of updating state immutably.
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val,
      };

    default:
      return state;
  }
};

export default reducer;
