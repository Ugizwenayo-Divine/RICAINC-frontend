import { resetActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { RESET_PASSWORD_URL } from '../../helpers/backendURLs';

export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        URL: RESET_PASSWORD_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: resetActionTypes.RESET_PASSWORD_START,
      onEnd: resetActionTypes.RESET_PASSWORD_END,
      onSuccess: resetActionTypes.RESET_PASSWORD_SUCCESS,
      onFailure: resetActionTypes.RESET_PASSWORD_FAILURE,
    })
  );
