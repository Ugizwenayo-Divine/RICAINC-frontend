import {
    UPDATE_USER_END,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_USER_START,
  } from '../../actionTypes/userActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case UPDATE_USER_START:
        return {
          ...state,
          loading: true,
          updateUserErrors: null,
          message: null,
        };
      case UPDATE_USER_SUCCESS:
        window.location.replace('/displayuser');
        return {
          ...state,
          loading: false,
          updateUserErrors: null,
          message: payload.message,
        };
      case UPDATE_USER_FAILURE:
        return {
          ...state,
          loading: false,
          updateUserErrors: payload.error,
          message: null,
        };
      case UPDATE_USER_END:
        return {
          ...state,
          loading: false,
          updateUserErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  