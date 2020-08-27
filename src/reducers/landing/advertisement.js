import {
    ADVERTISEMENT_END,
    ADVERTISEMENT_FAILURE,
    ADVERTISEMENT_START,
    ADVERTISEMENT_SUCCESS,
  } from '../../actionTypes/advertisementActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case ADVERTISEMENT_START:
        return {
          ...state,
          loading: true,
          advertisementErrors: null,
          message: null,
        };
      case ADVERTISEMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          advertisementErrors: null,
          message: payload.message,
          advertisements: payload.data,
        };
      case ADVERTISEMENT_FAILURE:
        return {
          ...state,
          loading: false,
          advertisementErrors: payload.error,
          message: null,
        };
      case ADVERTISEMENT_END:
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
  