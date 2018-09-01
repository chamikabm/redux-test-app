import { actionTypes } from "./actionTypes";

//Action Creators

// Sync Action Creator
const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  }
};

// Sync Action Creator
const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  }
};

// Sync Action Creator
const add = (value) => {
  return {
    type: actionTypes.ADD,
    val: value,
  }
};

// Sync Action Creator
const subtract = (value) => {
  return {
    type: actionTypes.SUBTRACT,
    val: value,
  }
};

export {
  increment,
  decrement,
  add,
  subtract,
};