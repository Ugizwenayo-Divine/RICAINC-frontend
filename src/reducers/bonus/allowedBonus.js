import {
  ALLOW_BONUS_START,
  ALLOW_BONUS_SUCCESS,
  ALLOW_BONUS_FAILURE,
  ALLOW_BONUS_END,
} from '../../actionTypes/bonusActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ALLOW_BONUS_START:
      return {
        ...state,
        loading: true,
        bonusErrors: null,
        message: null,
      };
    case ALLOW_BONUS_SUCCESS:
      return {
        ...state,
        loading: false,
        bonusErrors: null,
        message: payload.message,
        allowed:payload.data
      };
    case ALLOW_BONUS_FAILURE:
      return {
        ...state,
        loading: false,
        bonusErrors: payload.error,
        message: null,
      };
    case ALLOW_BONUS_END:
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
