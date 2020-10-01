import { bonusActionTypes} from '../../actionTypes';
import { apiAction } from '../../helpers';
import { BONUS_URL, ADD_BONUS_URL, CHECK_BONUS_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
  const createBonus = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: ADD_BONUS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: bonusActionTypes.CREATE_BONUS_START,
      onEnd: bonusActionTypes.CREATE_BONUS_END,
      onSuccess: bonusActionTypes.CREATE_BONUS_SUCCESS,
      onFailure: bonusActionTypes.CREATE_BONUS_FAILURE,
    })
  );
  const displayBonus = () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: BONUS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: bonusActionTypes.DISPLAY_BONUS_START,
      onEnd: bonusActionTypes.DISPLAY_BONUS_END,
      onSuccess: bonusActionTypes.DISPLAY_BONUS_SUCCESS,
      onFailure: bonusActionTypes.DISPLAY_BONUS_FAILURE,
    })
  );
  const deleteBonus = (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${BONUS_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: bonusActionTypes.DELETE_BONUS_START,
      onEnd: bonusActionTypes.DELETE_BONUS_END,
      onSuccess: bonusActionTypes.DELETE_BONUS_SUCCESS,
      onFailure: bonusActionTypes.DELETE_BONUS_FAILURE,
    })
  );
  const checkBonus = () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: CHECK_BONUS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: bonusActionTypes.ALLOW_BONUS_START,
      onEnd: bonusActionTypes.ALLOW_BONUS_END,
      onSuccess: bonusActionTypes.ALLOW_BONUS_SUCCESS,
      onFailure: bonusActionTypes.ALLOW_BONUS_FAILURE,
    })
  );
  export default {createBonus, displayBonus, deleteBonus, checkBonus};
