import {
  CREATE_REFUND_REQUEST,
  CREATE_REFUND_SUCCESS,
  CREATE_REFUND_FAILURE,
  CREATE_REFUND_END,
} from '../../actionTypes/refundActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_REFUND_REQUEST:
      return {
        ...state,
        loading: true,
        refundErrors: null,
        message: null,
      };
    case CREATE_REFUND_SUCCESS:
      return {
        ...state,
        loading: false,
        refundErrors: null,
        message: payload.message,
      };
    case CREATE_REFUND_FAILURE:
      return {
        ...state,
        loading: false,
        refundErrors: payload.error,
        message: null,
      };
    case CREATE_REFUND_END:
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
