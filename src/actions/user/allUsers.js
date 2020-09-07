import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_USERS_URL,USER_LOGOUT_URL, DELETE_USER_URL, UPDATE_USER_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
const getAllUsers = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: ALL_USERS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: userActionTypes.DISPLAY_USERS_START,
      onEnd: userActionTypes.DISPLAY_USERS_END,
      onSuccess: userActionTypes.DISPLAY_USERS_SUCCESS,
      onFailure: userActionTypes.DISPLAY_USERS_FAILURE,
    })
  );
  const userLogout = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token:data,
        URL: USER_LOGOUT_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: userActionTypes.USER_LOGOUT_START,
      onEnd: userActionTypes.USER_LOGOUT_END,
      onSuccess: userActionTypes.USER_LOGOUT_SUCCESS,
      onFailure: userActionTypes.USER_LOGOUT_FAILURE,
    })
  );
  const deleteUser = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${DELETE_USER_URL}/${data}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: userActionTypes.DELETE_USER_START,
      onEnd: userActionTypes.DELETE_USER_END,
      onSuccess: userActionTypes.DELETE_USER_SUCCESS,
      onFailure: userActionTypes.DELETE_USER_FAILURE,
    })
  );
  const updateUser = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${UPDATE_USER_URL}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: userActionTypes.UPDATE_USER_START,
      onEnd: userActionTypes.UPDATE_USER_END,
      onSuccess: userActionTypes.UPDATE_USER_SUCCESS,
      onFailure: userActionTypes.UPDATE_USER_FAILURE,
    })
  );
export default {getAllUsers,userLogout,deleteUser, updateUser};