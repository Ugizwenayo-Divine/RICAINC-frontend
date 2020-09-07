import {
    CLIENT_REFUND_START,
    CLIENT_REFUND_SUCCESS,
    CLIENT_REFUND_FAILURE,
    CLIENT_REFUND_END,
  } from '../../actionTypes/refundActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case CLIENT_REFUND_START:
        return {
          ...state,
          loading: true,
          refundErrors: null,
          message: null,
        };
      case CLIENT_REFUND_SUCCESS:
        return {
          ...state,
          loading: false,
          refundErrors: null,
          message: payload.message,
          data: payload.data
        };
      case CLIENT_REFUND_FAILURE:
        return {
          ...state,
          loading: false,
          refundErrors: payload.error,
          message: null,
        };
      case CLIENT_REFUND_END:
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
  