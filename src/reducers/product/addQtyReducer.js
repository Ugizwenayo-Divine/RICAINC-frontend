import {
    ADD_QTY_END,
    ADD_QTY_SUCCESS,
    ADD_QTY_FAILURE,
    ADD_QTY_START,
    
  } from '../../actionTypes/productActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case ADD_QTY_START:
        return {
          ...state,
          loading: true,
          productErrors: null,
          message: null,
        };
      case ADD_QTY_SUCCESS:
        return {
          ...state,
          loading: false,
          productErrors: null,
          message: payload.message,
        };
      case ADD_QTY_FAILURE:
        return {
          ...state,
          loading: false,
          productErrors: payload.error,
          message: null,
        };
      case ADD_QTY_END:
        return {
          ...state,
          loading: false,
          productErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  