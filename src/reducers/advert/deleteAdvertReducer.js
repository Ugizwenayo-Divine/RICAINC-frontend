import {
    DELETE_ADVERTISEMENT_END,
    DELETE_ADVERTISEMENT_SUCCESS,
    DELETE_ADVERTISEMENT_FAILURE,
    DELETE_ADVERTISEMENT_START,
  } from '../../actionTypes/advertisementActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DELETE_ADVERTISEMENT_START:
        return {
          ...state,
          loading: true,
          advertisementErrors: null,
          message: null,
        };
      case DELETE_ADVERTISEMENT_SUCCESS:        
      window.location.replace('/displayadvertisement');
        return {
          ...state,
          loading: false,
          advertisementErrors: null,
          message: payload.message,
        };
      case DELETE_ADVERTISEMENT_FAILURE:
        return {
          ...state,
          loading: false,
          advertisementErrors: payload.error,
          message: null,
        };
      case DELETE_ADVERTISEMENT_END:
        return {
          ...state,
          loading: false,
          advertisementErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  