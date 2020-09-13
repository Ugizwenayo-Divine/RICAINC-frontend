import {
    UPDATE_NEWS_END,
    UPDATE_NEWS_SUCCESS,
    UPDATE_NEWS_FAILURE,
    UPDATE_NEWS_START,
    
  } from '../../actionTypes/newsActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case UPDATE_NEWS_START:
        return {
          ...state,
          loading: true,
          newsErrors: null,
          message: null,
        };
      case UPDATE_NEWS_SUCCESS:
        window.location.replace('/displaynews');
        return {
          ...state,
          loading: false,
          newsErrors: null,
          message: payload.message,
        };
      case UPDATE_NEWS_FAILURE:
        return {
          ...state,
          loading: false,
          newsErrors: payload.error,
          message: null,
        };
      case UPDATE_NEWS_END:
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
  