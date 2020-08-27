import {
    BEST_PRODUCTS_END,
    BEST_PRODUCTS_FAILURE,
    BEST_PRODUCTS_START,
    BEST_PRODUCTS_SUCCESS,
  } from '../../actionTypes/bestProductsActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case BEST_PRODUCTS_START:
        return {
          ...state,
          loading: true,
          bestProductErrors: null,
          message: null,
        };
      case BEST_PRODUCTS_SUCCESS:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          loading: false,
          bestProductErrors: null,
          message: payload.message,
          bestProducts: payload.data,
        };
      case BEST_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          bestProductErrors: payload.error,
          message: null,
        };
      case BEST_PRODUCTS_END:
        return {
          ...state,
          loading: false,
          bestProductErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  