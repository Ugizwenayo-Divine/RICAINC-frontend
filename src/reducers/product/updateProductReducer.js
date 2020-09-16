import {
    UPDATE_PRODUCT_END,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_START,
    
  } from '../../actionTypes/productActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case UPDATE_PRODUCT_START:
        return {
          ...state,
          loading: true,
          productErrors: null,
          message: null,
        };
      case UPDATE_PRODUCT_SUCCESS:
        window.location.replace('/displayproduct');
        return {
          ...state,
          loading: false,
          productErrors: null,
          message: payload.message,
        };
      case UPDATE_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          productErrors: payload.error,
          message: null,
        };
      case UPDATE_PRODUCT_END:
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
  