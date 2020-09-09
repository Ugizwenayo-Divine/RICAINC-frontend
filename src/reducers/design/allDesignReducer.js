import {
    DISPLAY_DESIGN_START,
    DISPLAY_DESIGN_SUCCESS,
    DISPLAY_DESIGN_FAILURE,
    DISPLAY_DESIGN_END,
  } from '../../actionTypes/addDesignActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DISPLAY_DESIGN_START:
        return {
          ...state,
          loading: true,
          designErrors: null,
          message: null,
        };
      case DISPLAY_DESIGN_SUCCESS:
        return {
          ...state,
          loading: false,
          designErrors: null,
          message: payload.message,
          data:payload.data
        };
      case DISPLAY_DESIGN_FAILURE:
        return {
          ...state,
          loading: false,
          designErrors: payload.error,
          message: null,
        };
      case DISPLAY_DESIGN_END:
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
  