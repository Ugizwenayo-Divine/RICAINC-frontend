import {
    DELETE_NEWS_END,
    DELETE_NEWS_SUCCESS,
    DELETE_NEWS_FAILURE,
    DELETE_NEWS_START,
    
  } from '../../actionTypes/newsActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DELETE_NEWS_START:
        return {
          ...state,
          loading: true,
          newsErrors: null,
          message: null,
        };
      case DELETE_NEWS_SUCCESS:
        window.location.replace('/displaynews');
        return {
          ...state,
          loading: false,
          newsErrors: null,
          message: payload.message,
        };
      case DELETE_NEWS_FAILURE:
        return {
          ...state,
          loading: false,
          newsErrors: payload.error,
          message: null,
        };
      case DELETE_NEWS_END:
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
  