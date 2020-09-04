import {
    DELETE_USER_END,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    DELETE_USER_START,
  } from '../../actionTypes/userActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DELETE_USER_START:
        return {
          ...state,
          loading: true,
          userErrors: null,
          message: null,
        };
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          userErrors: null,
          message: payload.message,
        };
      case DELETE_USER_FAILURE:
        return {
          ...state,
          loading: false,
          userErrors: payload.error,
          message: null,
        };
      case DELETE_USER_END:
        return {
          ...state,
          loading: false,
          userErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  