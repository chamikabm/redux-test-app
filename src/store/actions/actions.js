// Action Identifiers
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const STORE_RESULT = 'STORE_RESULT';
const DELETE_RESULT = 'DELETE_RESULT';

//Action Creators
const increment = () => {
  return {
    type: INCREMENT,
  }
};

const decrement = () => {
  return {
    type: DECREMENT,
  }
};

const add = (value) => {
  return {
    type: ADD,
    val: value,
  }
};

const subtract = (value) => {
  return {
    type: SUBTRACT,
    val: value,
  }
};

const saveResult = (res) => {
  return {
    type: STORE_RESULT,
    result: res,
  }
};

const storeResult = (res) => {

  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    },2000);
  };
};

const deleteResult = (resElId) => {
  return {
    type: DELETE_RESULT,
    resultElementId: resElId,
  }
};


export const actionTypes = {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  STORE_RESULT,
  DELETE_RESULT,
};

export const actionCreators = {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  deleteResult,
};