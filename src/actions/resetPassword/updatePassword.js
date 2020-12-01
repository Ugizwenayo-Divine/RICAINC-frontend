import { resetActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { RESET_PASSWORD_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        URL: `${RESET_PASSWORD_URL}/${token}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: resetActionTypes.UPDATE_PASSWORD_START,
      onEnd: resetActionTypes.UPDATE_PASSWORD_END,
      onSuccess: resetActionTypes.UPDATE_PASSWORD_SUCCESS,
      onFailure: resetActionTypes.UPDATE_PASSWORD_FAILURE,
    })
  );
