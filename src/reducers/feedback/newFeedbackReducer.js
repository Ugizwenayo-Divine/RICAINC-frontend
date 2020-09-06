import {
  CREATE_FEEDBACK_REQUEST,
  CREATE_FEEDBACK_SUCCESS,
  CREATE_FEEDBACK_FAILURE,
  CREATE_FEEDBACK_END,
} from '../../actionTypes/feedbackActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_FEEDBACK_REQUEST:
      return {
        ...state,
        loading: true,
        feedbackErrors: null,
        message: null,
      };
    case CREATE_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        feedbackErrors: null,
        message: payload.message,
      };
    case CREATE_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        feedbackErrors: payload.error,
        message: null,
      };
    case CREATE_FEEDBACK_END:
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
