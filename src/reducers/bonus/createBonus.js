import {
  CREATE_BONUS_START,
  CREATE_BONUS_SUCCESS,
  CREATE_BONUS_FAILURE,
  CREATE_BONUS_END,
} from '../../actionTypes/bonusActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_BONUS_START:
      return {
        ...state,
        loading: true,
        bonusErrors: null,
        message: null,
      };
    case CREATE_BONUS_SUCCESS:
      return {
        ...state,
        loading: false,
        bonusErrors: null,
        message: payload.message,
        bonuses:payload.data
      };
    case CREATE_BONUS_FAILURE:
      return {
        ...state,
        loading: false,
        bonusErrors: payload.error,
        message: null,
      };
    case CREATE_BONUS_END:
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
