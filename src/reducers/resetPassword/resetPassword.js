import {
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_END,
} from '../../actionTypes/resetPasswordActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case RESET_PASSWORD_START:
      return {
        ...state,
        loading: true,
        resetErrors: null,
        message: null,
      };
    case RESET_PASSWORD_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        loading: false,
        resetErrors: null,
        message: payload.message,
        token:payload.token
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        resetErrors: payload.error,
        message: null,
      };
    case RESET_PASSWORD_END:
      return {
        ...state,
        loading: false,
        resetErrors: null,
        message: null,
      };

    default:
      return null;
  }
};
export default reducer;
