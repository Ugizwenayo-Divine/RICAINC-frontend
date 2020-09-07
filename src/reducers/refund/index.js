import initialState from '../../store/initialState';
import newRefundReducer from './newRefundReducer';

export default (state = initialState, action) => {
  const newRefund = newRefundReducer(state, action);

  return newRefund || state;
};
