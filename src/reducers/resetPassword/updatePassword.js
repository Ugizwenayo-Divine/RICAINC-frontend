import {
  UPDATE_PASSWORD_START,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_END,
} from '../../actionTypes/resetPasswordActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_PASSWORD_START:
      return {
        ...state,
        loading: true,
        resetErrors: null,
        message: null,
      };
    case UPDATE_PASSWORD_SUCCESS:
      localStorage.removeItem('token');
      window.location.replace('/login');
      return {
        ...state,
        loading: false,
        resetErrors: null,
        message: payload.message,
        token:payload.token
      };
    case UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        resetErrors: payload.error,
        message: null,
      };
    case UPDATE_PASSWORD_END:
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
