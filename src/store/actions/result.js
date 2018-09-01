import { actionTypes } from "./actionTypes";

//Action Creators

// Sync Action Creator
const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  }
};


// Async Action Creator
const storeResult = (res) => {

  return dispatch => {  // We are getting this dispatch here because of the thunk middleware.
    setTimeout(() => {
      dispatch(saveResult(res));
    },2000);
  };
};

// Sync Action Creator
const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElementId: resElId,
  }
};

export {
  storeResult,
  deleteResult,
};