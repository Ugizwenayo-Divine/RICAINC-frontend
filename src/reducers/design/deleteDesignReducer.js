import {
    DELETE_DESIGN_START,
    DELETE_DESIGN_SUCCESS,
    DELETE_DESIGN_FAILURE,
    DELETE_DESIGN_END,
  } from '../../actionTypes/addDesignActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DELETE_DESIGN_START:
        return {
          ...state,
          loading: true,
          designErrors: null,
          message: null,
        };
      case DELETE_DESIGN_SUCCESS:
        window.location.replace('/displaydesigns');
        return {
          ...state,
          loading: false,
          designErrors: null,
          message: payload.message,
        };
      case DELETE_DESIGN_FAILURE:
        return {
          ...state,
          loading: false,
          designErrors: payload.error,
          message: null,
        };
      case DELETE_DESIGN_END:
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
  