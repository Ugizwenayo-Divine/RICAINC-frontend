import {
    SIDEBAR_DISPLAY_END,
    SIDEBAR_DISPLAY_FAILURE,
    SIDEBAR_DISPLAY_START,
    SIDEBAR_DISPLAY_SUCCESS,
  } from '../../actionTypes/sidebarActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case SIDEBAR_DISPLAY_START:
        return {
          ...state,
          loading: true,
          searchErrors: null,
          message: null,
        };
      case SIDEBAR_DISPLAY_SUCCESS:
        return {
          ...state,
          loading: false,
          searchErrors: null,
          message: payload.message,
          data: payload.data,
        };
      case SIDEBAR_DISPLAY_FAILURE:
        return {
          ...state,
          loading: false,
          searchErrors: payload.error,
          message: null,
        };
      case SIDEBAR_DISPLAY_END:
        return {
          ...state,
          loading: false,
          searchErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  