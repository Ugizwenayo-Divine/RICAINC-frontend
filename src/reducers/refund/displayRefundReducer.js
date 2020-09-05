import {
    DISPLAY_REFUND_START,
    DISPLAY_REFUND_SUCCESS,
    DISPLAY_REFUND_FAILURE,
    DISPLAY_REFUND_END,
  } from '../../actionTypes/refundActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DISPLAY_REFUND_START:
        return {
          ...state,
          loading: true,
          refundErrors: null,
          message: null,
        };
      case DISPLAY_REFUND_SUCCESS:
        return {
          ...state,
          loading: false,
          refundErrors: null,
          message: payload.message,
          data: payload.data
        };
      case DISPLAY_REFUND_FAILURE:
        return {
          ...state,
          loading: false,
          refundErrors: payload.error,
          message: null,
        };
      case DISPLAY_REFUND_END:
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
  