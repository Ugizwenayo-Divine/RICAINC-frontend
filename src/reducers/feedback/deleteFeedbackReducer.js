import {
    DELETE_FEEDBACK_START,
    DELETE_FEEDBACK_SUCCESS,
    DELETE_FEEDBACK_FAILURE,
    DELETE_FEEDBACK_END,
  } from '../../actionTypes/feedbackActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DELETE_FEEDBACK_START:
        return {
          ...state,
          loading: true,
          feedbackErrors: null,
          message: null,
        };
      case DELETE_FEEDBACK_SUCCESS:
        window.location.replace('/displayfeedback');
        return {
          ...state,
          loading: false,
          feedbackErrors: null,
          message: payload.message,
        };
      case DELETE_FEEDBACK_FAILURE:
        return {
          ...state,
          loading: false,
          feedbackErrors: payload.error,
          message: null,
        };
      case DELETE_FEEDBACK_END:
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
  