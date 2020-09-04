import {
    DISPLAY_USERS_END,
    DISPLAY_USERS_SUCCESS,
    DISPLAY_USERS_FAILURE,
    DISPLAY_USERS_START,
  } from '../../actionTypes/userActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DISPLAY_USERS_START:
        return {
          ...state,
          loading: true,
          userErrors: null,
          message: null,
        };
      case DISPLAY_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          userErrors: null,
          message: payload.message,
          data: payload.data,
        };
      case DISPLAY_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          userErrors: payload.error,
          message: null,
        };
      case DISPLAY_USERS_END:
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
  