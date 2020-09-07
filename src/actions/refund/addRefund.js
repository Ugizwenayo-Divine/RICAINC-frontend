import { refundActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { NEW_REFUND } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: NEW_REFUND,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: refundActionTypes.CREATE_REFUND_REQUEST,
      onEnd: refundActionTypes.CREATE_REFUND_END,
      onSuccess: refundActionTypes.CREATE_REFUND_SUCCESS,
      onFailure: refundActionTypes.CREATE_REFUND_FAILURE,
    })
  );
