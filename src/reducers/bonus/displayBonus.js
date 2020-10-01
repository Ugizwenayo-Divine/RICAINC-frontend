import {
  DISPLAY_BONUS_START,
  DISPLAY_BONUS_SUCCESS,
  DISPLAY_BONUS_FAILURE,
  DISPLAY_BONUS_END,
} from '../../actionTypes/bonusActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case DISPLAY_BONUS_START:
      return {
        ...state,
        loading: true,
        bonusErrors: null,
        message: null,
      };
    case DISPLAY_BONUS_SUCCESS:
      return {
        ...state,
        loading: false,
        bonusErrors: null,
        message: payload.message,
        bonuses:payload.data
      };
    case DISPLAY_BONUS_FAILURE:
      return {
        ...state,
        loading: false,
        bonusErrors: payload.error,
        message: null,
      };
    case DISPLAY_BONUS_END:
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
