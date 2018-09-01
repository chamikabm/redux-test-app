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

  // return (dispatch, getState) => {  // We are getting this dispatch and getState here because of the thunk middleware.
  return dispatch => {  // We are getting this dispatch here because of the thunk middleware.
    setTimeout(() => {
      // console.log('oldCounter : ', getState().ctr.counter); // In thunk we can access to redux store with getState
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