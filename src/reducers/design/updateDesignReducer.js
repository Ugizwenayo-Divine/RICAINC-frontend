import {
    UPDATE_DESIGN_START,
    UPDATE_DESIGN_SUCCESS,
    UPDATE_DESIGN_FAILURE,
    UPDATE_DESIGN_END,
  } from '../../actionTypes/addDesignActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case UPDATE_DESIGN_START:
        return {
          ...state,
          loading: true,
          designErrors: null,
          message: null,
        };
      case UPDATE_DESIGN_SUCCESS:
        window.location.replace('/displaydesigns');
        return {
          ...state,
          loading: false,
          designErrors: null,
          message: payload.message,
        };
      case UPDATE_DESIGN_FAILURE:
        return {
          ...state,
          loading: false,
          designErrors: payload.error,
          message: null,
        };
      case UPDATE_DESIGN_END:
        return {
          ...state,
          loading: false,
          designErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  