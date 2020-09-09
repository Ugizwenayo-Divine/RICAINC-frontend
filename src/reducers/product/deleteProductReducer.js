import {
    DELETE_PRODUCT_END,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_START,
    
  } from '../../actionTypes/productActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DELETE_PRODUCT_START:
        return {
          ...state,
          loading: true,
          productErrors: null,
          message: null,
        };
      case DELETE_PRODUCT_SUCCESS:
        window.location.replace('/displayproduct');
        return {
          ...state,
          loading: false,
          productErrors: null,
          message: payload.message,
        };
      case DELETE_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          productErrors: payload.error,
          message: null,
        };
      case DELETE_PRODUCT_END:
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
  