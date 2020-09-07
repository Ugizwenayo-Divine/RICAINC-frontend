import {
  STATUS_REFUND_START,
  STATUS_REFUND_SUCCESS,
  STATUS_REFUND_FAILURE,
  STATUS_REFUND_END,
} from '../../actionTypes/refundActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case STATUS_REFUND_START:
      return {
        ...state,
        loading: true,
        refundErrors: null,
        message: null,
      };
    case STATUS_REFUND_SUCCESS:
      return {
        ...state,
        loading: false,
        refundErrors: null,
        message: payload.message,
        data: payload.data
      };
    case STATUS_REFUND_FAILURE:
      return {
        ...state,
        loading: false,
        refundErrors: payload.error,
        message: null,
      };
    case STATUS_REFUND_END:
      return {
        ...state,
        loading: false,
        refundErrors: null,
        message: null,
      };

    default:
      return null;
  }
};
export default reducer;
