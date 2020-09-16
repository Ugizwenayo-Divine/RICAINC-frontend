import {
    UPDATE_ADVERTISEMENT_END,
    UPDATE_ADVERTISEMENT_SUCCESS,
    UPDATE_ADVERTISEMENT_FAILURE,
    UPDATE_ADVERTISEMENT_START,
  } from '../../actionTypes/advertisementActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case UPDATE_ADVERTISEMENT_START:
        return {
          ...state,
          loading: true,
          advertisementErrors: null,
          message: null,
        };
      case UPDATE_ADVERTISEMENT_SUCCESS:
        window.location.replace('/displayadvertisement');
        return {
          ...state,
          loading: false,
          advertisementErrors: null,
          message: payload.message,
        };
      case UPDATE_ADVERTISEMENT_FAILURE:
        return {
          ...state,
          loading: false,
          advertisementErrors: payload.error,
          message: null,
        };
      case UPDATE_ADVERTISEMENT_END:
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
  