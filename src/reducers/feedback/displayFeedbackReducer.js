import {
    DISPLAY_FEEDBACK_START,
    DISPLAY_FEEDBACK_SUCCESS,
    DISPLAY_FEEDBACK_FAILURE,
    DISPLAY_FEEDBACK_END,
  } from '../../actionTypes/feedbackActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DISPLAY_FEEDBACK_START:
        return {
          ...state,
          loading: true,
          feedbackErrors: null,
          message: null,
        };
      case DISPLAY_FEEDBACK_SUCCESS:
        return {
          ...state,
          loading: false,
          feedbackErrors: null,
          message: payload.message,
          data: payload.data
        };
      case DISPLAY_FEEDBACK_FAILURE:
        return {
          ...state,
          loading: false,
          feedbackErrors: payload.error,
          message: null,
        };
      case DISPLAY_FEEDBACK_END:
        return {
          ...state,
          loading: false,
          feedbackErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  