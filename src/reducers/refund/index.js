import initialState from '../../store/initialState';
import newRefundReducer from './newRefundReducer';
import clientRefundReducer from './clientRefundReducer';
import displayRefundReducer from './displayRefundReducer';
import refundStatusReducer from './refundStatusReducer';

const refund = (state = initialState, action) => {
  const newRefund = newRefundReducer(state, action);

  return newRefund || state;
};

const clientRefund = (state = initialState, action) => {
  const newRefund = clientRefundReducer(state, action);

  return newRefund || state;
};

const displayRefund = (state = initialState, action) => {
  const newRefund = displayRefundReducer(state, action);

  return newRefund || state;
};

const refundStatus = (state = initialState, action) => {
  const newRefund = refundStatusReducer(state, action);

  return newRefund || state;
};

export default{refund, clientRefund,displayRefund,refundStatus};