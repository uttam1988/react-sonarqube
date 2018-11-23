import {
  GET_USER_DETAILS_LOADING,
  GET_USER_DETAILS_LOADED,
  GET_USER_DETAILS_FAILED,
  CLEAR_USER_DETAILS_REQUESTED
} from "../Actions";

export const users = (state = {}, action) => {
  if (action.type === GET_USER_DETAILS_LOADING) {
    return {
      ...state,
      loading: true
    };
  } else if (action.type === GET_USER_DETAILS_LOADED) {
    return { ...state, selectedUser: action.data, loading: false };
  } else if (action.type === GET_USER_DETAILS_FAILED) {
    return { ...state, loading: false, error: true };
  } else if (action.type === CLEAR_USER_DETAILS_REQUESTED) {
    return { ...state, selectedUser: action.data };
  } else {
    return state;
  }
};
