import {
    EXTERNAL_ADVERTISEMENT_END,
    EXTERNAL_ADVERTISEMENT_FAILURE,
    EXTERNAL_ADVERTISEMENT_START,
    EXTERNAL_ADVERTISEMENT_SUCCESS,
  } from '../../actionTypes/externalAdvertActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case EXTERNAL_ADVERTISEMENT_START:
        return {
          ...state,
          loading: true,
          advertisementErrors: null,
          message: null,
        };
      case EXTERNAL_ADVERTISEMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          advertisementErrors: null,
          message: payload.message,
          advertisements: payload.data,
        };
      case EXTERNAL_ADVERTISEMENT_FAILURE:
        return {
          ...state,
          loading: false,
          advertisementErrors: payload.error,
          message: null,
        };
      case EXTERNAL_ADVERTISEMENT_END:
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
  