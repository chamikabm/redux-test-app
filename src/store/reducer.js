const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INCREMENT':
      const newState = Object.assign({}, state); // One way of updating state immutably.
      newState.counter = state.counter + 1;
      return newState;
    case 'DECREMENT':
      return {
        ...state,  // Second way of updating state immutably.
        counter: state.counter - 1,
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id: +new Date(), value: state.counter}), // Here we are using concat as in the push method it updates values mutably.
      };
    case 'DELETE_RESULT':
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
