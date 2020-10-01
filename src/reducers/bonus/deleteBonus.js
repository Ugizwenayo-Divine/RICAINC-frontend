import {
  DELETE_BONUS_START,
  DELETE_BONUS_SUCCESS,
  DELETE_BONUS_FAILURE,
  DELETE_BONUS_END,
} from '../../actionTypes/bonusActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case DELETE_BONUS_START:
      return {
        ...state,
        loading: true,
        bonusErrors: null,
        message: null,
      };
    case DELETE_BONUS_SUCCESS:
      window.location.replace('/displaybonus')
      return {
        ...state,
        loading: false,
        bonusErrors: null,
        message: payload.message
      };
    case DELETE_BONUS_FAILURE:
      return {
        ...state,
        loading: false,
        bonusErrors: payload.error,
        message: null,
      };
    case DELETE_BONUS_END:
      return {
        ...state,
        loading: false,
        bonusErrors: null,
        message: null,
      };

    default:
      return null;
  }
};
export default reducer;
