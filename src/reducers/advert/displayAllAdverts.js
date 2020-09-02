import {
    DISPLAY_ADVERT_START,
    DISPLAY_ADVERT_SUCCESS,
    DISPLAY_ADVERT_FAILURE,
    DISPLAY_ADVERT_END,
  } from '../../actionTypes/advertisementActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DISPLAY_ADVERT_START:
        return {
          ...state,
          loading: true,
          advertisementErrors: null,
          message: null,
        };
      case DISPLAY_ADVERT_SUCCESS:
        return {
          ...state,
          loading: false,
          advertisementErrors: null,
          message: payload.message,
          advertisements: payload.data
        };
      case DISPLAY_ADVERT_FAILURE:
        return {
          ...state,
          loading: false,
          advertisementErrors: payload.error,
          message: null,
        };
      case DISPLAY_ADVERT_END:
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
  