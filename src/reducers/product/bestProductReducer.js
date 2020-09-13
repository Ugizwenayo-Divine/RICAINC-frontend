import {
    BEST_PRODUCT_END,
    BEST_PRODUCT_SUCCESS,
    BEST_PRODUCT_FAILURE,
    BEST_PRODUCT_START,
    
  } from '../../actionTypes/productActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case BEST_PRODUCT_START:
        return {
          ...state,
          loading: true,
          productErrors: null,
          message: null,
        };
      case BEST_PRODUCT_SUCCESS:
        window.location.replace('/');
        return {
          ...state,
          loading: false,
          productErrors: null,
          message: payload.message,
        };
      case BEST_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          productErrors: payload.error,
          message: null,
        };
      case BEST_PRODUCT_END:
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
  