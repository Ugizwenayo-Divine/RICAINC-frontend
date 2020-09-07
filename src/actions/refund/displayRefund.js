import { refundActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { CLIENT_REFUND_URL,DISPLAY_REFUNDS_URL, REFUND_STATUS_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
const getAll = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: DISPLAY_REFUNDS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: refundActionTypes.DISPLAY_REFUND_START,
      onEnd: refundActionTypes.DISPLAY_REFUND_END,
      onSuccess: refundActionTypes.DISPLAY_REFUND_SUCCESS,
      onFailure: refundActionTypes.DISPLAY_REFUND_FAILURE,
    })
  );
 const clientRefunds = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: CLIENT_REFUND_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: refundActionTypes.CLIENT_REFUND_START,
      onEnd: refundActionTypes.CLIENT_REFUND_END,
      onSuccess: refundActionTypes.CLIENT_REFUND_SUCCESS,
      onFailure: refundActionTypes.CLIENT_REFUND_FAILURE,
    })
  );

  const statusRefund = (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${REFUND_STATUS_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: refundActionTypes.STATUS_REFUND_START,
      onEnd: refundActionTypes.STATUS_REFUND_END,
      onSuccess: refundActionTypes.STATUS_REFUND_SUCCESS,
      onFailure: refundActionTypes.STATUS_REFUND_FAILURE,
    })
  );

  export default {getAll, clientRefunds,statusRefund}