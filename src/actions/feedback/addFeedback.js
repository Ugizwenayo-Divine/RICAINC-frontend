import { feedbackActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { NEW_FEEDBACK } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: NEW_FEEDBACK,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: feedbackActionTypes.CREATE_FEEDBACK_REQUEST,
      onEnd: feedbackActionTypes.CREATE_FEEDBACK_END,
      onSuccess: feedbackActionTypes.CREATE_FEEDBACK_SUCCESS,
      onFailure: feedbackActionTypes.CREATE_FEEDBACK_FAILURE,
    })
  );
