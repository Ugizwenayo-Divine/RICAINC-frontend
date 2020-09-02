import {
  CREATE_NEWS_REQUEST,
  CREATE_NEWS_SUCCESS,
  CREATE_NEWS_FAILURE,
  CREATE_NEWS_END,
} from '../../actionTypes/newsActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        newsErrors: null,
        message: null,
      };
    case CREATE_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        newsErrors: null,
        message: payload.message,
      };
    case CREATE_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        newsErrors: payload.error,
        message: null,
      };
    case CREATE_NEWS_END:
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
