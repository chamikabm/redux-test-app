const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  console.log('[REDUCER] action.type : ' +  action.type);

  if (action.type === 'INC_COUNTER') {

    return {
      ...state,
      counter: state.counter + 1,
  }
  } else if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value,
    }
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log('[Subscription]')
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
console.log(store.getState());
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
