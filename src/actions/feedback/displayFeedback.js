import { feedbackActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { DISPLAY_FEEDBACKS_URL,DELETE_FEEDBACK_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
const getAll = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: DISPLAY_FEEDBACKS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: feedbackActionTypes.DISPLAY_FEEDBACK_START,
      onEnd: feedbackActionTypes.DISPLAY_FEEDBACK_END,
      onSuccess: feedbackActionTypes.DISPLAY_FEEDBACK_SUCCESS,
      onFailure: feedbackActionTypes.DISPLAY_FEEDBACK_FAILURE,
    })
  );
  const deleteFeedback = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${DELETE_FEEDBACK_URL}/${data}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: feedbackActionTypes.DELETE_FEEDBACK_START,
      onEnd: feedbackActionTypes.DELETE_FEEDBACK_END,
      onSuccess: feedbackActionTypes.DELETE_FEEDBACK_SUCCESS,
      onFailure: feedbackActionTypes.DELETE_FEEDBACK_FAILURE,
    })
  );
export default {getAll,deleteFeedback};