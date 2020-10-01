import {
  DISPLAY_TRANSPORT_START,
  DISPLAY_TRANSPORT_SUCCESS,
  DISPLAY_TRANSPORT_FAILURE,
  DISPLAY_TRANSPORT_END,
} from '../../actionTypes/transportActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case DISPLAY_TRANSPORT_START:
      return {
        ...state,
        loading: true,
        transportErrors: null,
        message: null,
      };
    case DISPLAY_TRANSPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        transportErrors: null,
        message: payload.message,
        districts:payload.data
      };
    case DISPLAY_TRANSPORT_FAILURE:
      return {
        ...state,
        loading: false,
        transportErrors: payload.error,
        message: null,
      };
    case DISPLAY_TRANSPORT_END:
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
