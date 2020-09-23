import {
  UPDATE_TRANSPORT_START,
  UPDATE_TRANSPORT_SUCCESS,
  UPDATE_TRANSPORT_FAILURE,
  UPDATE_TRANSPORT_END,
} from '../../actionTypes/transportActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_TRANSPORT_START:
      return {
        ...state,
        loading: true,
        transportErrors: null,
        message: null,
      };
    case UPDATE_TRANSPORT_SUCCESS:
      window.location.replace('/displaytransport');
      return {
        ...state,
        loading: false,
        transportErrors: null,
        message: payload.message,
        districts:payload.data
      };
    case UPDATE_TRANSPORT_FAILURE:
      return {
        ...state,
        loading: false,
        transportErrors: payload.error,
        message: null,
      };
    case UPDATE_TRANSPORT_END:
      return {
        ...state,
        loading: false,
        transportErrors: null,
        message: null,
      };

    default:
      return null;
  }
};
export default reducer;
