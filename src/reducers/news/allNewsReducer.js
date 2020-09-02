import {
    DISPLAY_NEWS_REQUEST,
    DISPLAY_NEWS_SUCCESS,
    DISPLAY_NEWS_FAILURE,
    DISPLAY_NEWS_END,
  } from '../../actionTypes/newsActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DISPLAY_NEWS_REQUEST:
        return {
          ...state,
          loading: true,
          newsErrors: null,
          message: null,
        };
      case DISPLAY_NEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          newsErrors: null,
          message: payload.message,
          data: payload.data
        };
      case DISPLAY_NEWS_FAILURE:
        return {
          ...state,
          loading: false,
          newsErrors: payload.error,
          message: null,
        };
      case DISPLAY_NEWS_END:
        return {
          ...state,
          loading: false,
          newsErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  